import { Product } from "../models/Product";

export function calculateDiscount(product: Product): string {
    const discountAmount = product.price * (product.discountPercentage / 100);
    return `Discount Amount: ${discountAmount.toFixed(2)}`;
}
