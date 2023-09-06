import Model from './model.entity';
import { Sales } from './sales.entity';
import { Orders } from './orders.entity';
import { Roles } from './roles.entity';
export declare class Users extends Model {
    first_name: string;
    last_name: string;
    phone_number: string;
    username: string;
    password: string;
    is_active: boolean;
    roles: Roles;
    role_id: number;
    sales: Sales[];
    orders: Orders[];
}
