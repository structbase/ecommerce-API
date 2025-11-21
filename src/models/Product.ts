export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;

    constructor(
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        discountPercentage: number
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails(): string {
        return `Product name: ${this.title}`;
    }
    getPriceWithDiscount(): string {
        const discounted = this.price * (1 - this.discountPercentage / 100);
        return `Discounted Price: ${discounted.toFixed(2)}`;
    }
}

