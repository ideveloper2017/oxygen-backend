import { Response } from 'express';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { UpdateApartmentDto } from 'src/dtos/apartment-dto/update-apartment.dto';
import { ApartmentsService } from 'src/service/apartments.service';
export declare class ApartmentsController {
    private readonly apartmentsService;
    constructor(apartmentsService: ApartmentsService);
    createApartment(floor_id: number, createApartmentDto: CreateApartmentDto): Promise<import("../entity/apartments.entity").Apartments>;
    updateApartment(id: number, updateApartmentDto: UpdateApartmentDto): Promise<void | {
        success: boolean;
        message: string;
    }>;
    deleteApartment(id: number): Promise<void | {
        success: boolean;
        message: string;
    }>;
    getApartments(floor_id: number, res: Response): Promise<void | {
        success: boolean;
        data: import("../entity/apartments.entity").Apartments[];
        message: string;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
}
