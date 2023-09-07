import { Repository } from 'typeorm';
import { District } from '../entity/district.entity';
export declare class DistrictsService {
    private districtRepo;
    constructor(districtRepo: Repository<District>);
    getAllDistricts(): any;
    getSelectDistrict(id: number): Promise<any>;
    fillDataDistrict: () => Promise<void>;
}
