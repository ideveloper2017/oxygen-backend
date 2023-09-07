import Model from './model.entity';
import { Orders } from './orders.entity';
export declare class PaymentMethods extends Model {
    name: string;
    is_active: boolean;
    orders: Orders[];
}
