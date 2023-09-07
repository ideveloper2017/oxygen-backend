import Model from "./model.entity";
import { Orders } from "./orders.entity";
import { Apartments } from "./apartments.entity";
export declare class OrderItems extends Model {
    orders: Orders;
    apartments: Apartments;
    room_space: string;
    final_price: number;
    quantity: number;
}
