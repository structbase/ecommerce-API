"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
const errorHandler_1 = require("./errorHandler");
async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new errorHandler_1.CustomError("Failed to fetch products", response.status);
        }
        const data = (await response.json());
        return data;
    }
    catch (error) {
        (0, errorHandler_1.handleError)(error);
        throw error;
    }
}
//# sourceMappingURL=apiServices.js.map