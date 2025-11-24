import { handleError, CustomError } from "./errorHandler";
// fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then(console.log);

export async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new CustomError("Failed to fetch products", response.status);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        handleError(error);
        throw error; 
    }
}