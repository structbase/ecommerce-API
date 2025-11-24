"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(product) {
    const discountAmount = product.price * (product.discountPercentage / 100);
    return `Discount Amount: ${discountAmount.toFixed(2)}`;
}
//# sourceMappingURL=discountCalculator.js.map