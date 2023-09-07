import Model from './model.entity';
import { Apartments } from './apartments.entity';
import { Entrance } from './entrance.entity';
export declare class Floor extends Model {
    floor_number: number;
    entrance: Entrance;
    entrance_id: number;
    apartments: Apartments[];
}
