import Model from './model.entity';
import { Apartments } from './apartments.entity';
export declare class Price extends Model {
    apartment_id: Apartments;
    apartment_price: number;
    is_active_price: boolean;
}
