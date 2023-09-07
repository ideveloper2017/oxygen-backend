import { EntrancesService } from 'src/service/entrances.service';
export declare class EntrancesController {
    private readonly entranceService;
    constructor(entranceService: EntrancesService);
    addEntrance(building_id: number): Promise<void | {
        success: boolean;
        data: any;
        message: string;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    getEntranceOfBuilding(building_id: number): Promise<any>;
    deleteEmptyEntrances(id: number): Promise<any>;
}
