import Model from './model.entity';
import { Users } from './users.entity';
import { Roles } from './roles.entity';
export declare class UserRoles extends Model {
    user: Users;
    roles: Roles[];
    is_active: boolean;
}
