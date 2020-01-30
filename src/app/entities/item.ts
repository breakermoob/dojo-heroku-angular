export class Item {
    title: String;
    pictures = {
        id: String,
        url: String,
    };
    sold_quantity: number;
    price: number;
    original_price: number;
    warranty: String;
    shipping = {
        free_shipping: Boolean,
    };
}