"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        return `Product name: ${this.title}`;
    }
    getPriceWithDiscount() {
        const discounted = this.price * (1 - this.discountPercentage / 100);
        return `Discounted Price: ${discounted.toFixed(2)}`;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map