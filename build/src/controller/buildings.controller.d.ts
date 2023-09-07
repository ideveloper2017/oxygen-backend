import { Response } from 'express';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { UpdateBuildingDto } from 'src/dtos/building-dto/update-building.dto';
import { BuildingsService } from 'src/service/buildings.service';
export declare class BuildingsController {
    private readonly buildingsService;
    constructor(buildingsService: BuildingsService);
    addBuilding(createBuildingDto: CreateBuildingDto): Promise<{
        success: boolean;
        data: any[];
        message: string;
    }>;
    getAllBuildings(id: number): Promise<{
        success: boolean;
        data: any;
        message: string;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        message: any;
    }>;
    getTestBuildings(town_id: number, res: Response): Promise<void | Response<any, Record<string, any>>>;
    editBuilding(id: number, updateBuildingDto: UpdateBuildingDto): Promise<void | {
        success: boolean;
        message: string;
    }>;
    deleteBuilding(id: number): Promise<void | {
        success: boolean;
        message: string;
    }>;
}
