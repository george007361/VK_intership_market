export interface RawProductData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export interface ProductData extends RawProductData {
    amount: number;
}

export interface CartData {
    products: ProductData[],
    totalPrice: number,
    totalAmount: number,
}