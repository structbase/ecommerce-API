import { handleError, CustomError } from "./errorHandler";

export interface ProductData {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
}

export interface ApiResponse {
    products: ProductData[];
}

export async function fetchData(): Promise<ApiResponse> {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new CustomError("Failed to fetch products", response.status);
        }
        const data = (await response.json()) as ApiResponse;
        return data;
    } catch (error) {
        handleError(error);
        throw error;
    }
}
