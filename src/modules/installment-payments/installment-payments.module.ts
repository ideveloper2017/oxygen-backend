import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstallmentPaymentsController } from 'src/controller/installment-payments.controller';
import { InstallmentPayments } from 'src/entity/installment-payments.entity';
import { InstallmentPaymentsService } from 'src/service/installment-payments.service';

@Module({
    imports: [TypeOrmModule.forFeature([InstallmentPayments])],
    controllers: [InstallmentPaymentsController],
    providers: [InstallmentPaymentsService],
    exports: [TypeOrmModule]
})
export class InstallmentPaymentsModule {}
