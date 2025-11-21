import { Product } from "../models/Product";

export function calculateTax(product: Product): string {
    const taxRate = product.category === "groceries" ? 0.03 : 0.0475;
    const taxAmount = product.price * taxRate;
    return `Tax Amount: ${taxAmount.toFixed(2)}`;
}
