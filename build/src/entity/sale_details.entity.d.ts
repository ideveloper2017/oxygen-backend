import Model from './model.entity';
import { Apartments } from './apartments.entity';
export declare class Sale_details extends Model {
    apartment_id: Apartments[];
    price: number;
}
