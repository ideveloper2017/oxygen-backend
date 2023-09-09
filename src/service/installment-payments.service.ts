import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstallmentPayments } from 'src/entity/installment-payments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstallmentPaymentsService {
    constructor(@InjectRepository(InstallmentPayments) private readonly installmentPayRepo: Repository<InstallmentPayments>){}

    
}
