"use strict";

/*
 * SpendWise interactive budget tracker
 * Concepts: variables, arrays, objects, conditionals, loops, DOM manipulation,
 * functions, form events, and event delegation.
 */

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

let monthlyBudget = 2500;

// Expense records are stored as objects inside an array.
let expenses = [
    { id: 1, name: "Weekly groceries", category: "Food", date: "2026-10-18", amount: 300 },
    { id: 2, name: "Bus fare", category: "Transport", date: "2026-10-17", amount: 120 },
    { id: 3, name: "Rent payment", category: "Rent", date: "2026-10-01", amount: 900 },
    { id: 4, name: "Streaming subscription", category: "Entertainment", date: "2026-10-12", amount: 60 },
    { id: 5, name: "Emergency savings", category: "Savings", date: "2026-10-10", amount: 150 },
    { id: 6, name: "Electricity and water", category: "Utilities", date: "2026-10-15", amount: 80 }
];

const categoryBudgets = [
    { name: "Food", description: "Groceries and meals", budget: 500, className: "food", icon: "F" },
    { name: "Transport", description: "Fuel and bus fares", budget: 300, className: "transport", icon: "T" },
    { name: "Rent", description: "Housing and accommodation", budget: 1000, className: "rent", icon: "R" },
    { name: "Entertainment", description: "Leisure and subscriptions", budget: 200, className: "entertainment", icon: "E" },
    { name: "Savings", description: "Emergency fund and goals", budget: 300, className: "savings", icon: "S" },
    { name: "Utilities", description: "Water, electricity and internet", budget: 200, className: "utilities", icon: "U" }
];

const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseDateInput = document.getElementById("expense-date");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const categoryGrid = document.getElementById("category-grid");
const formMessage = document.getElementById("form-message");

// Return a currency value in a consistent format.
function formatCurrency(amount) {
    return currencyFormatter.format(amount);
}

// Calculate total expenses by looping through the expense array.
function calculateTotalExpenses(records) {
    let total = 0;

    for (const expense of records) {
        total += expense.amount;
    }

    return total;
}

// Calculate expenses for one category using a loop.
function calculateCategoryTotal(categoryName) {
    let total = 0;

    for (const expense of expenses) {
        if (expense.category === categoryName) {
            total += expense.amount;
        }
    }

    return total;
}

// Show a short message after a user action.
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

// Update the three summary cards and decide the budget status.
function renderSummary() {
    const totalSpent = calculateTotalExpenses(expenses);
    const remainingBalance = monthlyBudget - totalSpent;
    const spentPercentage = monthlyBudget > 0 ? (totalSpent / monthlyBudget) * 100 : 0;
    const remainingPercentage = monthlyBudget > 0 ? (remainingBalance / monthlyBudget) * 100 : 0;

    document.getElementById("total-budget").textContent = formatCurrency(monthlyBudget);
    document.getElementById("total-spent").textContent = formatCurrency(totalSpent);
    document.getElementById("remaining-balance").textContent = formatCurrency(remainingBalance);
    document.getElementById("spent-note").textContent = `${spentPercentage.toFixed(1)}% of budget`;

    const balanceNote = document.getElementById("balance-note");
    const budgetStatus = document.getElementById("budget-status");

    if (remainingBalance < 0) {
        balanceNote.textContent = `${Math.abs(remainingPercentage).toFixed(1)}% over budget`;
        budgetStatus.textContent = "Budget exceeded";
        budgetStatus.classList.add("over-budget");
    } else if (remainingBalance === 0) {
        balanceNote.textContent = "Budget fully used";
        budgetStatus.textContent = "Budget fully used";
        budgetStatus.classList.remove("over-budget");
    } else {
        balanceNote.textContent = `${remainingPercentage.toFixed(1)}% available`;
        budgetStatus.textContent = "Within budget";
        budgetStatus.classList.remove("over-budget");
    }
}

// Create category cards dynamically from category data and expense records.
function renderCategories() {
    categoryGrid.replaceChildren();

    for (const category of categoryBudgets) {
        const spent = calculateCategoryTotal(category.name);
        const percentage = category.budget > 0 ? (spent / category.budget) * 100 : 0;
        const visiblePercentage = Math.min(percentage, 100);

        const card = document.createElement("article");
        card.className = `category-card ${category.className}`;

        const top = document.createElement("div");
        top.className = "category-top";

        const icon = document.createElement("span");
        icon.className = "category-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = category.icon;

        const percent = document.createElement("span");
        percent.className = "category-percent";
        percent.textContent = `${percentage.toFixed(0)}%`;

        top.append(icon, percent);

        const info = document.createElement("div");
        info.className = "category-info";

        const title = document.createElement("h3");
        title.textContent = category.name;

        const description = document.createElement("p");
        description.textContent = category.description;

        info.append(title, description);

        const amount = document.createElement("div");
        amount.className = "category-amount";

        const spentAmount = document.createElement("strong");
        spentAmount.textContent = formatCurrency(spent);

        const categoryBudget = document.createElement("span");
        categoryBudget.textContent = `of ${formatCurrency(category.budget)}`;

        amount.append(spentAmount, categoryBudget);

        const track = document.createElement("div");
        track.className = "progress-track";

        const progress = document.createElement("span");
        progress.style.width = `${visiblePercentage}%`;
        progress.setAttribute("aria-label", `${percentage.toFixed(0)} percent of category budget used`);

        track.append(progress);
        card.append(top, info, amount, track);
        categoryGrid.append(card);
    }
}

// Render transaction records using DOM methods rather than hard-coded HTML.
function renderExpenses() {
    expenseList.replaceChildren();

    if (expenses.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 5;
        cell.textContent = "No expenses recorded yet. Add your first expense above.";
        row.append(cell);
        expenseList.append(row);
        return;
    }

    // Sort a copy so the newest date appears first without changing stored data.
    const sortedExpenses = [...expenses].sort((a, b) => b.date.localeCompare(a.date));

    for (const expense of sortedExpenses) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const dateCell = document.createElement("td");
        dateCell.textContent = expense.date;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatCurrency(expense.amount);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-expense";
        deleteButton.textContent = "Delete";
        deleteButton.dataset.expenseId = String(expense.id);
        deleteButton.setAttribute("aria-label", `Delete ${expense.name}`);
        actionCell.append(deleteButton);

        row.append(nameCell, categoryCell, dateCell, amountCell, actionCell);
        expenseList.append(row);
    }
}

// Keep all dashboard sections synchronized with the array data.
function renderDashboard() {
    renderSummary();
    renderCategories();
    renderExpenses();
    console.log("SpendWise dashboard updated.");
    console.log("Monthly budget:", formatCurrency(monthlyBudget));
    console.log("Total expenses:", formatCurrency(calculateTotalExpenses(expenses)));
    console.log("Remaining balance:", formatCurrency(monthlyBudget - calculateTotalExpenses(expenses)));
}

// Handle monthly budget updates.
budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    if (!Number.isFinite(newBudget) || newBudget <= 0) {
        showMessage("Enter a budget greater than zero.", "error");
        return;
    }

    monthlyBudget = newBudget;
    renderDashboard();

    if (calculateTotalExpenses(expenses) > monthlyBudget) {
        showMessage("Budget updated, but your expenses exceed this budget.", "error");
    } else {
        showMessage("Monthly budget updated successfully.", "success");
    }
});

// Handle adding a new expense.
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const category = expenseCategoryInput.value;
    const date = expenseDateInput.value;
    const amount = Number(expenseAmountInput.value);

    if (name === "") {
        showMessage("Enter an expense name.", "error");
        return;
    }

    if (!date) {
        showMessage("Choose an expense date.", "error");
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        showMessage("Enter an expense amount greater than zero.", "error");
        return;
    }

    const newExpense = {
        id: Date.now(),
        name: name,
        category: category,
        date: date,
        amount: amount
    };

    expenses.push(newExpense);
    renderDashboard();
    expenseForm.reset();
    expenseDateInput.value = new Date().toISOString().slice(0, 10);

    const totalSpent = calculateTotalExpenses(expenses);
    if (totalSpent > monthlyBudget) {
        showMessage("Expense added. Warning: you have exceeded your total budget.", "error");
    } else {
        showMessage("Expense added successfully.", "success");
    }
});

// Use event delegation so Delete works for every dynamically created row.
expenseList.addEventListener("click", function (event) {
    const deleteButton = event.target.closest(".delete-expense");

    if (!deleteButton) {
        return;
    }

    const expenseId = Number(deleteButton.dataset.expenseId);
    const expenseToDelete = expenses.find((expense) => expense.id === expenseId);

    if (!expenseToDelete) {
        showMessage("That expense could not be found.", "error");
        return;
    }

    expenses = expenses.filter((expense) => expense.id !== expenseId);
    renderDashboard();
    showMessage(`Deleted "${expenseToDelete.name}".`, "success");
});

// Initialize the date field and render the first dashboard view.
expenseDateInput.value = new Date().toISOString().slice(0, 10);
renderDashboard();
