import { Repository } from 'typeorm';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { Buildings } from 'src/entity/buildings.entity';
import { UpdateBuildingDto } from 'src/dtos/building-dto/update-building.dto';
export declare class BuildingsService {
    private readonly buildingRepository;
    constructor(buildingRepository: Repository<Buildings>);
    createBuilding(createBuildingDto: CreateBuildingDto): Promise<any[]>;
    findAllBuildings(id: number): Promise<any>;
    getBuilding(id: number): Promise<Buildings[]>;
    updateBuilding(id: number, updateBuildingDto: UpdateBuildingDto): Promise<import("typeorm").UpdateResult>;
    deleteBuilding(id: number): Promise<import("typeorm").DeleteResult>;
    getBuldingsOfTown(town_id: number): Promise<Buildings[]>;
}
