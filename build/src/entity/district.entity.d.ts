import Model from './model.entity';
import { Regions } from './region.entity';
export declare class District extends Model {
    name: string;
    region: Regions[];
}
