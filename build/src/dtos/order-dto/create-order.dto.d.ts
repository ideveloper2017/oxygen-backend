export declare class CreateOrderDto {
    client_id: number;
    user_id: number;
    apartment_id: number;
    payment_method_id: number;
    total_price: number;
    order_date: Date;
    quantity: number;
    is_accepted: boolean;
}
