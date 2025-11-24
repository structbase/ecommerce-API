"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(product) {
    const taxRate = product.category === "groceries" ? 0.03 : 0.0475;
    const taxAmount = product.price * taxRate;
    return `Tax Amount: ${taxAmount.toFixed(2)}`;
}
//# sourceMappingURL=taxCalculator.js.map