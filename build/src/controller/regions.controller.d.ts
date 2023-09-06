import { Response } from 'express';
import { RegionsService } from '../service/regions.service';
import { DistrictsService } from '../service/districts.service';
import { RegionDto } from '../dtos/region.dto';
export declare class RegionsController {
    private readonly regionService;
    private readonly distrService;
    constructor(regionService: RegionsService, distrService: DistrictsService);
    regionList(res: Response): void;
    distrList(res: Response): void;
    addregion(regionDto: RegionDto, res: Response): void;
    fillDataregion(): Promise<any>;
    getRegionByDistrict(res: any, id: number): Promise<void>;
}
