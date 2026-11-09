# SpendWise: Interactive Budget Tracker

## Project Overview

SpendWise is a personal budgeting dashboard that lets users set a monthly budget, record expenses, view spending by category, and monitor their remaining balance. This project transforms a static visual dashboard into an interactive application powered by JavaScript.

## Project Links

- **GitHub Repository:** https://github.com/Dev-binabdallah/my-budget-trucker
- **Live Netlify Website:** https://spendwise-budget-trucker.netlify.app/

## Technologies Used

- **HTML5:** Structures the dashboard, forms, summary cards, categories, and transaction table.
- **CSS3:** Provides styling, layout, and responsive design.
- **JavaScript:** Implements calculations, input validation, event handling, and dynamic DOM updates.
- **Git:** Tracks source-code changes.
- **GitHub:** Hosts the project repository and manages version control.
- **Netlify:** Hosts the live application and supports continuous deployment.

## Improvements Made This Week

- Added a form to update the monthly budget.
- Added a form to record expense names, categories, dates, and amounts.
- Stored multiple expense records in an array of objects.
- Added dynamic calculations for total spending and remaining balance.
- Generated category cards and transaction rows using JavaScript.
- Added conditional feedback for valid inputs, budget limits, and errors.
- Added delete buttons for expense records.
- Added event listeners for form submissions and delete actions.
- Updated the DOM whenever application data changes.

## JavaScript Concepts

### Conditionals

`if`, `else if`, and `else` statements validate input and determine whether spending is within budget, exactly at the budget limit, or over budget.

### Arrays and Objects

The `expenses` array stores expense objects containing an ID, name, category, date, and amount.

The `categoryBudgets` array stores category names, descriptions, budgets, CSS classes, and icons.

### Loops

`for...of` loops process expense records, calculate spending totals, generate category cards, and render transaction rows.

### DOM Manipulation

The application uses `document.getElementById()`, `document.createElement()`, `textContent`, `append()`, `replaceChildren()`, and `classList` to update dashboard content dynamically.

### Events and User Interaction

The `submit` event listeners handle budget updates and expense creation. `event.preventDefault()` prevents page reloads during form submissions.

A delegated `click` listener on the transaction table handles dynamically generated delete buttons.

### Functions

- `formatCurrency()` formats monetary values.
- `calculateTotalExpenses()` calculates total expenses.
- `calculateCategoryTotal()` calculates spending by category.
- `renderSummary()` updates budget summaries.
- `renderCategories()` generates category cards.
- `renderExpenses()` generates transaction rows.
- `renderDashboard()` refreshes the dashboard.
- `showMessage()` displays user feedback.

## Deployment Process

The project is hosted on GitHub, while Netlify provides the live website.

The deployment process involves:

1. Creating and maintaining the project files locally.
2. Committing changes using Git.
3. Pushing the latest project files to the GitHub repository.
4. Connecting the GitHub repository to Netlify.
5. Selecting the appropriate GitHub deployment branch.
6. Configuring the publish directory containing `index.html`.
7. Deploying the application through Netlify.
8. Opening the generated Netlify URL to verify that the website is accessible.

### Continuous Deployment

Netlify supports continuous deployment through its GitHub integration.

When continuous deployment is enabled, pushing new commits to the configured GitHub branch automatically triggers a new deployment.

This allows changes made to the project to be published without manually uploading the files every time.

**Live Website:** https://spendwise-budget-trucker.netlify.app/

## Lessons Learned

Working on SpendWise improved my understanding of JavaScript and frontend web development.

The main lessons learned include:

- Using arrays and objects to manage multiple related records.
- Applying loops and functions to reduce code repetition.
- Using conditional statements to validate user input.
- Manipulating the DOM to create dynamic web interfaces.
- Using event listeners to handle user interactions.
- Understanding Git and GitHub for source-code management.
- Understanding how Netlify publishes static websites.
- Learning how continuous deployment connects GitHub updates with automatic website deployment.

I also learned that developing a working application locally is not sufficient. Publishing the application, verifying the live website, and testing the deployment workflow are important parts of completing a web development project.

## Challenges and Resolutions

1. **Static dashboard values:** Replaced hard-coded HTML values with dynamically generated JavaScript content.
2. **Managing multiple expenses:** Used arrays of objects to store expense records.
3. **Keeping calculations consistent:** Created `renderDashboard()` to refresh the interface after data changes.
4. **Handling invalid input:** Added conditional validation for missing names, dates, and invalid amounts.
5. **Dynamic delete buttons:** Used event delegation to handle buttons generated after page loading.

## How to Run Locally

1. Clone the repository:

   `git clone https://github.com/Dev-binabdallah/my-budget-trucker.git`

2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, preferably using Live Server.
4. Update the monthly budget or add and delete expenses.
5. Observe the dashboard update automatically.

You can also access the application through the live Netlify website.

## Project Files

- `index.html`: Dashboard structure and forms.
- `style.css`: Layout, styling, and responsive design.
- `script.js`: Application logic, calculations, and event handling.
- `README.md`: Project documentation.

## Limitations and Future Improvements

Expense records are currently stored in JavaScript memory. Refreshing the page resets added or deleted records to the sample data.

Future improvements could include browser storage using `localStorage` or a database to preserve expense records between sessions.

## Author

Bin Abdallah

## Purpose

Educational project demonstrating JavaScript conditionals, arrays, loops, functions, DOM manipulation, event listeners, GitHub version control, and website deployment.