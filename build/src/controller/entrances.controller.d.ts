import { EntrancesService } from 'src/service/entrances.service';
export declare class EntrancesController {
    private readonly entranceService;
    constructor(entranceService: EntrancesService);
    addEntrance(building_id: number): Promise<void | {
        success: boolean;
        data: import("../entity/entrance.entity").Entrance;
        message: string;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    getEntranceOfBuilding(building_id: number): Promise<import("../entity/entrance.entity").Entrance[]>;
    deleteEmptyEntrances(id: number): Promise<any>;
}
