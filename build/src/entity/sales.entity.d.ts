import Model from './model.entity';
import { Clients } from './clients.entity';
import { Users } from './users.entity';
export declare class Sales extends Model {
    users: Users;
    user_id: number;
    clients: Clients;
    client_id: number;
    total_price: number;
    qty: number;
}
