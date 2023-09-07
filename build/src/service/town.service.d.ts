import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { UpdateTownDto } from 'src/dtos/town-dto/update-town.dto';
import { Towns } from 'src/entity/town.entity';
import { Repository } from 'typeorm';
import { RegionsService } from './regions.service';
import { DistrictsService } from './districts.service';
import { RolesService } from './roles.service';
import { PermissionsService } from './permissions.service';
export declare class TownService {
    private readonly townRepository;
    private readonly regionService;
    private readonly districtService;
    private readonly roleService;
    private readonly permissionService;
    constructor(townRepository: Repository<Towns>, regionService: RegionsService, districtService: DistrictsService, roleService: RolesService, permissionService: PermissionsService);
    createTown(createTownDto: CreateTownDto): Promise<{
        status: number;
        data: CreateTownDto & Towns;
        message: string;
    } | {
        status: number;
        message: string;
        data?: undefined;
    }>;
    findAllTowns(): Promise<Towns[]>;
    updateTown(id: number, updateTownDto: UpdateTownDto): Promise<import("typeorm").UpdateResult>;
    deleteTown(id: number): Promise<import("typeorm").DeleteResult>;
    clearDatabase(): Promise<boolean>;
}
