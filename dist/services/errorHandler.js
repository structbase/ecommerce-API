"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.CustomError = void 0;
exports.handleError = handleError;
class CustomError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = "CustomError";
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
exports.ValidationError = ValidationError;
function handleError(error) {
    if (error instanceof CustomError) {
        console.error(`CustomError (${error.statusCode}): ${error.message}`);
    }
    else if (error instanceof ValidationError) {
        console.error(`ValidationError: ${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    }
    else {
        console.error("Unknown error occurred.");
    }
}
//# sourceMappingURL=errorHandler.js.map