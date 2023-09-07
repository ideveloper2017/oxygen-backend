import { Repository } from 'typeorm';
import { Roles } from '../entity/roles.entity';
export declare class RolesService {
    private roleRepo;
    constructor(roleRepo: Repository<Roles>);
    getRoleList(): Promise<any>;
    filldata: () => Promise<any>;
}
