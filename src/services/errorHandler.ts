export class CustomError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.name = "CustomError";
        this.statusCode = statusCode;
    }
}

export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

export function handleError(error: unknown): void {
    if (error instanceof CustomError) {
        console.error(`CustomError (${error.statusCode}): ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.error(`ValidationError: ${error.message}`);
    } else if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.error("Unknown error occurred.");
    }
}
