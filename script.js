
"use strict";

// 1. Variables and application data
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 2. Reusable function to collect numeric input
function getAmount(message, defaultValue) {
    const input = prompt(message, defaultValue);

    if (input === null || input.trim() === "") {
        return null;
    }

    const amount = Number(input);

    if (!Number.isFinite(amount) || amount < 0) {
        alert("Please enter a valid, non-negative number.");
        return null;
    }

    return amount;
}

// 3. Function to calculate the remaining budget
function calculateRemainingBudget(budget, expenses) {
    return budget - expenses;
}

// 4. Function to display the budget summary
function displayBudgetSummary(budget, expenses, remaining) {
    console.log("===== My Budget Tracker Summary =====");
    console.log("Total Budget: $" + budget.toFixed(2));
    console.log("Total Expenses: $" + expenses.toFixed(2));
    console.log("Remaining Balance: $" + remaining.toFixed(2));

    if (remaining < 0) {
        console.log("Status: You have exceeded your budget.");
    } else {
        console.log("Status: You are within your budget.");
    }
}

// 5. Collect user input
budget = getAmount("Enter your total budget:", "2500");

if (budget !== null) {
    totalExpenses = getAmount("Enter your total expenses:", "1610");

    if (totalExpenses !== null) {
        // 6. Perform calculations
        remainingBalance = calculateRemainingBudget(
            budget,
            totalExpenses
        );

        // 7. Display results
        displayBudgetSummary(
            budget,
            totalExpenses,
            remainingBalance
        );
    } else {
        console.log("Calculation cancelled: invalid or missing expenses.");
    }
} else {
    console.log("Calculation cancelled: invalid or missing budget.");
}
