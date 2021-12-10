export interface Product{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}
export const PRODUCTS: Product[ ] = [
    { id: 1,price: 242, name: 'Nike', imageUrl: '../../assets/nike.jpg',description: "view detail"},
    { id: 2,price: 300, name: 'Puma', imageUrl: '../../assets/puma.jpg',description: "view detail"},
    { id: 3,price: 220, name: 'Skechers', imageUrl: '../../assets/sketcher.jpg',description: "view detail"}
];

