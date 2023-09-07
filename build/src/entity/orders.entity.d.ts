import Model from './model.entity';
import { Clients } from './clients.entity';
import { Users } from './users.entity';
export declare class Orders extends Model {
    clients: Clients;
    client_id: number;
    users: Users;
    user_id: number;
    is_accepted: boolean;
}
