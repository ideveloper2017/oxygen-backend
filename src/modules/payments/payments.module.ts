import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsController } from 'src/controller/payments.controller';
import { Payments } from 'src/entity/payments.entity';
import { PaymentsService } from 'src/service/payments.service';

@Module({
    imports: [TypeOrmModule.forFeature([Payments])],
    controllers: [PaymentsController],
    providers: [PaymentsService],
    exports: [TypeOrmModule]
})
export class PaymentsModule {}
