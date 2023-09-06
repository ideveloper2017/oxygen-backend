import Model from './model.entity';
import { District } from './district.entity';
export declare class Regions extends Model {
    name: string;
    district: District[];
    toString(): string;
}
