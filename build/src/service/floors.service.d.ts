import { Floor } from 'src/entity/floor.entity';
import { Repository } from 'typeorm';
export declare class FloorsService {
    private readonly floorRepository;
    constructor(floorRepository: Repository<Floor>);
    addFloor(entrance_id: number): Promise<Floor>;
    getFloorOfEntrance(entrance_id: number): Promise<Floor[]>;
    deleteFloor(id: number): Promise<any>;
}
