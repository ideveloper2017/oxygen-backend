import Model from './model.entity';
import { Towns } from './town.entity';
import { Entrance } from './entrance.entity';
export declare class Buildings extends Model {
    towns: Towns;
    town_id: number;
    name: string;
    entrance_number: number;
    floor_number: number;
    entrances: Entrance[];
    apartment_number: number;
    mk_price: number;
}
