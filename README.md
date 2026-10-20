# SpendWise: JavaScript Budget Calculator

## Project Description

SpendWise is a personal budgeting project designed to help users understand their spending and manage their money. This project introduces JavaScript functionality to a dashboard by collecting budget information, calculating expenses, and displaying the remaining balance in the browser console.

## Features

- Collects budget and expense information using JavaScript prompts.
- Converts user input into numeric values.
- Validates input to prevent invalid or negative amounts.
- Calculates the remaining budget.
- Identifies whether spending is within the budget or exceeds it.
- Displays a clearly labelled budget summary in the browser console.
- Uses reusable functions to organize the application logic.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub

## JavaScript Concepts Implemented

### 1. Variables

The project uses `let` to declare variables such as `budget`, `totalExpenses`, and `remainingBalance`. These variables store the values required for budgeting calculations.

### 2. Data Types

The application works with strings received from prompts, numeric values converted using `Number()`, and `null` when input is cancelled.

### 3. User Input

The `prompt()` function collects the user's budget and total expenses. The `getAmount()` function converts and validates the input before it is used in calculations.

### 4. Budget Calculations

The remaining balance is calculated by subtracting total expenses from the budget:

`Remaining Balance = Total Budget - Total Expenses`

For example, a budget of $2,500 and expenses of $1,610 leave a balance of $890.

### 5. Reusable Functions

The project includes three functions:

- `getAmount()` collects and validates numeric input.
- `calculateRemainingBudget()` calculates the remaining balance.
- `displayBudgetSummary()` displays the results and budget status.

These functions separate input handling, calculations, and output, making the code easier to understand and maintain.

### 6. Console Output

The `console.log()` method displays the budget, total expenses, remaining balance, and budget status in the browser's Developer Tools Console.

## How to Run the Project

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, preferably using the Live Server extension.
4. Enter the requested budget and expense amounts in the prompts.
5. Open Developer Tools using `F12`.
6. Select the Console tab to view the results.

## Project Structure

- `index.html` contains the dashboard structure.
- `style.css` contains the dashboard styling.
- `script.js` contains the budgeting logic.
- `README.md` documents the project and its JavaScript implementation.

## Future Improvements

- Update dashboard summary cards dynamically.
- Add individual expenses through a form.
- Store expenses using browser local storage.
- Calculate spending totals by category.
- Add visual warnings when the budget is exceeded.

## Author

Bin Abdallah

## License

This project is developed for educational purposes.
