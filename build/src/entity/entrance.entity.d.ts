import Model from "./model.entity";
import { Buildings } from "./buildings.entity";
import { Floor } from "./floor.entity";
export declare class Entrance extends Model {
    entrance_number: number;
    buildings: Buildings;
    building_id: number;
    floors: Floor[];
}
