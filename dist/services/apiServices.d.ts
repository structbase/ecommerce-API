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
export declare function fetchData(): Promise<ApiResponse>;
