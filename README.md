# E-commerce Product Management System

## Overview

This is a simple E-commerce Product Management System built using **TypeScript**. It demonstrates:

* Object-Oriented Programming (OOP) principles
* Asynchronous API requests
* Error handling
* Basic product operations like calculating discounts and tax

The system fetches product data from the [Dummy JSON Products API](https://dummyjson.com/products) and displays product details, discount amounts, and tax amounts.

---

## Folder Structure

```
e-commerce-system/
├── src/
│   ├── models/
│   │   └── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
├── dist/
├── package.json
└── tsconfig.json
```

* `src/models`: Contains the `Product` class
* `src/services`: Contains API service and utility functions
* `src/utils`: Contains discount, tax, and error handling functions
* `main.ts`: Entry point of the application
* `dist`: Compiled JavaScript output

---

## Installation

1. Clone the repository:

```bash
git clone <https://github.com/structbase/ecommerce-API>
cd ecommerce-API
```

2. Install dependencies:

```bash
npm install
```

3. Compile TypeScript to JavaScript:

```bash
npx tsc
```

---

## Running the Application

Run the compiled JavaScript file using Node:

```bash
node dist/main.js
```

---

## Features

* Fetch product data from an external API
* Create `Product` instances using TypeScript classes
* Display product details, discount amounts, and tax amounts
* Handle API and runtime errors using custom error classes

---

## Example Output

```
-_-_-_-_-Product: 0-_-_-_-_-
Product: Essence Mascara Lash Princess | Category: beauty | Price: $9.99
Discount Amount: 1.05
Tax Amount: 0.47
```

---

## Technologies Used

* TypeScript
* Node.js
* Fetch API

---

## Notes

* The project demonstrates the **basic implementation** required for the assessment.
* Discount and tax calculations are based on product price and category.
* Products from the API are dynamically mapped to the `Product` class.


---

## Reflection

In this project, I implemented a basic E-commerce Product Management System using TypeScript, focusing on object-oriented programming, asynchronous operations, and error handling. I created a `Product` class to represent individual products, including properties such as `id`, `title`, `description`, `category`, `price`, and `discountPercentage`. The class also contains methods like `displayDetails()` and `getPriceWithDiscount()`, which encapsulate product-specific logic and demonstrate proper use of OOP principles.

TypeScript features were used throughout the project to ensure type safety and improve code reliability. I defined interfaces for API responses (`ProductData` and `ApiResponse`) to provide clear contracts for the data returned by the Dummy JSON Products API. Function parameters and return types were annotated to prevent runtime errors and make the code self-documenting.

For asynchronous operations, I implemented the `fetchData()` function using `async/await` to retrieve product data from the external API. I also used `.map()` to transform the raw data into instances of the `Product` class. This approach ensures that API calls do not block the execution flow and allows for straightforward handling of multiple products.

Error handling was addressed with a custom `CustomError` class and a utility function `handleError()`. This allowed me to differentiate between different types of errors and log meaningful messages, improving the robustness of the application. I also wrapped the main execution logic in a `try/catch` block to handle any unexpected runtime errors.

Finally, I implemented utility functions to calculate discounts and taxes for each product. These functions demonstrate the separation of concerns, keeping calculations outside the `Product` class while still allowing the main program to combine all information for display.

Overall, this project strengthened my understanding of TypeScript features, OOP concepts, asynchronous programming, and error handling. The main challenges were designing a modular structure that could handle dynamic API data and ensuring type safety throughout the application. By using TypeScript’s strict type checking and clearly defined interfaces, I was able to overcome these challenges and produce a functional, maintainable application.

---

## 🏁 Credits & Resources
-   [Using the Fetch API for HTTP Requests](https://ps-lms.vercel.app/curriculum/se/413/lesson-8)
-   [Error Handling and Custom Errors](https://ps-lms.vercel.app/curriculum/se/413/lesson-5)
-   [Async/Await and the JavaScript Event Loop](https://ps-lms.vercel.app/curriculum/se/413/lesson-7)
-   [MDN Web Docs – Error Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

---
## ✍️ Author

Developed by **Abenezer**

>  Junior developer 