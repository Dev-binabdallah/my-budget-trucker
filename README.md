# SpendWise: Interactive Budget Tracker

## Project Overview

SpendWise is a personal budgeting dashboard that lets users set a monthly budget, record expenses, view spending by category, and monitor their remaining balance. This week's update moves the project from a static visual dashboard to an interactive application powered by JavaScript.

## Improvements Made This Week

- Added a form to update the monthly budget.
- Added a form to record an expense name, category, date, and amount.
- Stored multiple expense records in an array of objects.
- Added dynamic calculations for total spending and remaining balance.
- Generated category cards and transaction rows from JavaScript data.
- Added conditional feedback for valid inputs, budget limits, and errors.
- Added delete buttons for expense records.
- Added event listeners for form submissions and delete actions.
- Updated the DOM whenever the underlying data changes.

## JavaScript Concepts

### Conditionals

`if`, `else if`, and `else` statements validate input and determine whether spending is within budget, exactly at the budget limit, or over budget. Invalid amounts and missing values are rejected with a message.

### Arrays and Objects

The `expenses` array stores expense objects. Each object contains an ID, name, category, date, and amount. This makes it possible to store and manage multiple records instead of relying on separate variables for every expense.

The `categoryBudgets` array stores category names, descriptions, category budgets, CSS class names, and icons.

### Loops

`for...of` loops process expense records to calculate total spending, calculate category totals, render category cards, and render transaction rows. This keeps the code scalable as more records are added.

### DOM Manipulation

The application uses `document.getElementById()`, `document.createElement()`, `textContent`, `append()`, `replaceChildren()`, and `classList` to update dashboard values and page content. Summary cards, category cards, transaction rows, progress indicators, and budget status are updated directly on the webpage.

### Events and User Interaction

The `submit` event listeners handle budget updates and expense creation. `event.preventDefault()` prevents a form submission from reloading the page. A delegated `click` listener on the transaction table handles delete buttons, including buttons created dynamically.

### Functions

- `formatCurrency()` formats monetary values.
- `calculateTotalExpenses()` calculates the sum of all expenses.
- `calculateCategoryTotal()` calculates the spending total for a category.
- `renderSummary()` updates the budget summary and budget status.
- `renderCategories()` generates category cards and progress bars.
- `renderExpenses()` generates the transaction table.
- `renderDashboard()` refreshes the dashboard after data changes.
- `showMessage()` displays feedback to the user.

## Challenges and Resolutions

1. **Static dashboard values:** The original values were hard-coded in HTML. They were replaced with JavaScript-rendered values so the dashboard updates when expenses change.
2. **Managing multiple expenses:** Separate variables would be difficult to maintain. An array of objects now stores all expense records.
3. **Keeping calculations consistent:** The dashboard is refreshed through `renderDashboard()` after adding, deleting, or updating data.
4. **Handling invalid input:** Conditional checks reject blank names, missing dates, non-numeric amounts, and amounts that are zero or negative.
5. **Handling dynamically created buttons:** Event delegation on the expense table ensures delete buttons work even when rows are generated after page load.

## How to Run

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, preferably using the Live Server extension.
4. Update the monthly budget or add and delete expenses.
5. Observe the summary cards, category cards, progress bars, transaction list, and budget status update immediately.

## Project Files

- `index.html`: Dashboard structure and forms.
- `style.css`: Layout, styling, and responsive design.
- `script.js`: Data, calculations, DOM updates, and event handling.
- `README.md`: Project documentation.

## Limitations

Expense records are currently stored in JavaScript memory. Refreshing the page resets added or deleted records to the sample data. Browser storage or a database can be added in a future version.

## Author

Bin Abdallah

## Purpose

Educational project demonstrating JavaScript conditionals, arrays, loops, functions, DOM manipulation, and event listeners.
