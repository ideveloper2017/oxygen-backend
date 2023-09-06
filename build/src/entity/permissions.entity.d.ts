import Model from './model.entity';
import { Roles } from './roles.entity';
export declare class Permissions extends Model {
    name: string;
    roles: Roles[];
}
