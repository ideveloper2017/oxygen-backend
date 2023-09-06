import { Repository } from 'typeorm';
import { District } from '../entity/district.entity';
export declare class DistrictsService {
    private districtRepo;
    constructor(districtRepo: Repository<District>);
    getAllDistricts(): Promise<District[]>;
    getSelectDistrict(id: number): Promise<District[]>;
    fillDataDistrict: () => Promise<void>;
}
