export declare class CustomError extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
export declare class ValidationError extends Error {
    constructor(message: string);
}
export declare function handleError(error: unknown): void;
