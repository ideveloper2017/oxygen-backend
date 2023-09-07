import { Repository } from 'typeorm';
import { Permissions } from '../entity/permissions.entity';
export declare class PermissionsService {
    private readonly permissionRepo;
    constructor(permissionRepo: Repository<Permissions>);
    getPermission: () => Promise<any>;
    filldata: () => Promise<any>;
}
