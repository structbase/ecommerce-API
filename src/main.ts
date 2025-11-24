import { Product } from "./models/Product";
import { fetchData } from "./services/apiServices";

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
                    p.discountPercentage
                )
        );

        console.log("Products loaded:", products);
    } catch (error) {
        console.error("Main Error:", error);
    }
}

main();
