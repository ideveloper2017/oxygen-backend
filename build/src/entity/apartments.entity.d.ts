import Model from './model.entity';
import { Price } from './price.entity';
import { Sale_details } from './sale_details.entity';
import { Floor } from './floor.entity';
export declare class Apartments extends Model {
    floor: Floor;
    floor_id: number;
    room_number: number;
    cells: number;
    room_space: number;
    status: string;
    price: Price[];
    sales_details: Sale_details[];
}
