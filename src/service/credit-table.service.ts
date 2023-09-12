import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditTable } from 'src/entity/credit-table.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreditTableService {
    constructor(@InjectRepository(CreditTable) private readonly creditTableRepo: Repository<CreditTable>){}

    async getCreditTableOfClient(order_id: number){
        const creditTable = await this.creditTableRepo.find({where: {order_id: order_id}})
        return creditTable
    }
    
}
