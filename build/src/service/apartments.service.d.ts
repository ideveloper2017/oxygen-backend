import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { UpdateApartmentDto } from 'src/dtos/apartment-dto/update-apartment.dto';
import { Apartments } from 'src/entity/apartments.entity';
import { Repository } from 'typeorm';
export declare class ApartmentsService {
    private readonly apartmentRepository;
    constructor(apartmentRepository: Repository<Apartments>);
    addOneApartment(floor_id: number, createApartmentDto: CreateApartmentDto): Promise<any>;
    updateApartment(id: number, updateApartmentDto: UpdateApartmentDto): Promise<any>;
    deleteApartment(id: number): Promise<any>;
    getApartments(floor_id: number): Promise<any>;
}
