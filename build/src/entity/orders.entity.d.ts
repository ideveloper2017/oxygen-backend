import Model from "./model.entity";
import { Clients } from "./clients.entity";
import { Users } from "./users.entity";
import { Apartments } from "./apartments.entity";
import { PaymentMethods } from "./payment_methods.entity";
import { OrderItems } from "./order-items.entity";
export declare class Orders extends Model {
    clients: Clients;
    client_id: number;
    apartments: Apartments;
    apartment_id: number;
    users: Users;
    user_id: number;
    quantity: number;
    total_price: number;
    is_accepted: boolean;
    order_date: Date;
    paymentMethods: PaymentMethods;
    payment_method_id: number;
    orderItems: OrderItems[];
}
