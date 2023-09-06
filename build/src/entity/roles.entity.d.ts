import Model from './model.entity';
import { Permissions } from './permissions.entity';
import { Users } from './users.entity';
export declare class Roles extends Model {
    role_name: string;
    role_title: string;
    is_active: boolean;
    users: Users;
    permission: Permissions[];
}
