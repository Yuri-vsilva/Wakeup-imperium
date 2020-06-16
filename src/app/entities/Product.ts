export interface Product {

    id: string,
    name: string,
    images: string[],
    description: string;
    price: {
        value: number,
        installments: number,
        installmentValue: number
    }
}