import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditTableController } from 'src/controller/kredit-plan.controller';
import { CreditTable } from 'src/entity/credit-table.entity';
import { CreditTableService } from 'src/service/credit-table.service';

@Module({
    imports: [TypeOrmModule.forFeature([CreditTable])],
    controllers: [CreditTableController],
    providers: [CreditTableService],
    exports: [TypeOrmModule]
})
export class CreditTableModule {}
