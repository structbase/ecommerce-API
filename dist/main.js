"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiServices_1 = require("./services/apiServices");
const discountCalculator_1 = require("./services/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
let productCount = 1;
async function main() {
    try {
        const data = await (0, apiServices_1.fetchData)();
        const products = data.products.map((p) => new Product_1.Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage));
        products.forEach((product) => {
            console.log("-_-_-_-_-" + "Product: " + productCount++ + "-_-_-_-_-");
            console.log(product.displayDetails());
            console.log((0, discountCalculator_1.calculateDiscount)(product));
            console.log((0, taxCalculator_1.calculateTax)(product));
        });
    }
    catch (error) {
        console.error("Main Error:", error);
    }
}
main();
//# sourceMappingURL=main.js.map