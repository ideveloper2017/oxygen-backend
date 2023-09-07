import { Repository } from 'typeorm';
import { Regions } from '../entity/region.entity';
import { RegionDto } from '../dtos/region.dto';
export declare class RegionsService {
    private readonly regionRepository;
    constructor(regionRepository: Repository<Regions>);
    getAllRegion(): Promise<Regions[]>;
    insertRegion(regionDto: RegionDto): Promise<RegionDto & Regions>;
    fillDataRegion(): Promise<any>;
}
