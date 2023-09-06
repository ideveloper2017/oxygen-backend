import Model from './model.entity';
import { Sales } from './sales.entity';
import { Orders } from './orders.entity';
export declare class Clients extends Model {
    first_name: string;
    last_name: string;
    middle_name: string;
    gender: string;
    type: string;
    address: string;
    contact_number: string;
    date_of_birth: Date;
    passport_seria: string;
    given_from: string;
    given_date: Date;
    untill_date: Date;
    legal_address: string;
    registered_address: string;
    description: string;
    sales: Sales[];
    orders: Orders[];
}
