import { Product } from "../models/Product";

export function calculateDiscount(product: Product): string {
    return product.getPriceWithDiscount();
}
