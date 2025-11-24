import { Product } from "./models/Product";
import { fetchData } from "./services/apiServices";
import { calculateDiscount } from "./services/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";

let productCount: number = 0

async function main() {
    try {
        const data = await fetchData();

        const products = data.products.map(
            (p) =>
                new Product(
                    p.id,
                    p.title,
                    p.description,
                    p.category,
                    p.price,
                    p.discountPercentage,
                )
        );

        products.forEach((product) => {
            console.log("-_-_-_-_-"+"Product: "+productCount++ +"-_-_-_-_-");
            console.log(product.displayDetails());
            console.log(calculateDiscount(product));
            console.log(calculateTax(product));
        });
    } catch (error) {
        console.error("Main Error:", error);
    }
}

main();
