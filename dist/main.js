"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiServices_1 = require("./services/apiServices");
async function main() {
    try {
        const data = await (0, apiServices_1.fetchData)();
        const products = data.products.map((p) => new Product_1.Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage));
        console.log("Products loaded:", products);
    }
    catch (error) {
        console.error("Main Error:", error);
    }
}
main();
//# sourceMappingURL=main.js.map