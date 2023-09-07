import { Entrance } from 'src/entity/entrance.entity';
import { Repository } from 'typeorm';
export declare class EntrancesService {
    private readonly entanceRepo;
    constructor(entanceRepo: Repository<Entrance>);
    addEntrance(building_id: number): Promise<any>;
    getEntranceOfBuilding(building_id: number): Promise<any>;
    deleteEmptyEnrances(id: number): Promise<any>;
}
