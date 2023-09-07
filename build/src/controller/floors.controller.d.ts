import { FloorsService } from 'src/service/floors.service';
export declare class FloorsController {
    private readonly floorService;
    constructor(floorService: FloorsService);
    addFloor(entrance_id: number): Promise<void | {
        success: boolean;
        message: string;
        data: import("../entity/floor.entity").Floor;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    getFloorsOfEntrance(entrance_id: number): Promise<import("../entity/floor.entity").Floor[]>;
    deleteEmptyEntrances(id: number): Promise<any>;
}
