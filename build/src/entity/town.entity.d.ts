import Model from './model.entity';
import { Buildings } from './buildings.entity';
export declare class Towns extends Model {
    name: string;
    region_id: number;
    district_id: number;
    address: string;
    contact_number: string;
    logo: string;
    buildings: Buildings[];
}
