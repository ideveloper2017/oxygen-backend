import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditTable } from 'src/entity/kredit-plan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreditTableService {
    constructor(@InjectRepository(CreditTable) private readonly CreditTableRepo: Repository<CreditTable>){}

    
}
