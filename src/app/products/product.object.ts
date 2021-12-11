export class Product{
    id: any;
    name: string;
    price: any;
    imageUrl: string;
    description: string;
    constructor(){
        this.id = null;
        this.name = '';
        this.price = null;
        this.imageUrl = '';
        this.description = '';

    }
}
export const PRODUCTS: Product[ ] = [
    { id: 1,price: 242, name: 'Nike', imageUrl: '../../assets/nike.jpg',description: "view detail"},
    { id: 2,price: 300, name: 'Puma', imageUrl: '../../assets/puma.jpg',description: "view detail"},
    { id: 3,price: 220, name: 'Skechers', imageUrl: '../../assets/sketcher.jpg',description: "view detail"}
];

