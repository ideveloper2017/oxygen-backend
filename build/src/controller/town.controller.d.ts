import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { UpdateTownDto } from 'src/dtos/town-dto/update-town.dto';
import { TownService } from 'src/service/town.service';
export declare class TownController {
    private readonly townService;
    constructor(townService: TownService);
    createTown(createTownDto: CreateTownDto): Promise<void>;
    getAllTowns(res: any): Promise<any>;
    updateTown(id: number, updateTownDto: UpdateTownDto): Promise<void | {
        success: boolean;
        message: string;
    }>;
    deleteTown(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    truncateDatabase(): Promise<{
        success: boolean;
        message: string;
    }>;
}
