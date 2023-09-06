import { RolesService } from './service/roles.service';
import { RegionsService } from './service/regions.service';
import { DistrictsService } from './service/districts.service';
import { PermissionsService } from './service/permissions.service';
export declare class AppModule {
    private regionServ;
    private distServ;
    private roleServ;
    private permissionserv;
    constructor(regionServ: RegionsService, distServ: DistrictsService, roleServ: RolesService, permissionserv: PermissionsService);
}
