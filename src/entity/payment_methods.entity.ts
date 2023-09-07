import {Column, Entity, OneToMany} from 'typeorm';
import Model from './model.entity';
import { ApiTags } from '@nestjs/swagger';
import { Orders } from './orders.entity';

@ApiTags('Payment_Methods')
@Entity('PaymentMethods')
export class PaymentMethods extends Model {
    @Column({unique: true})
    name: string;
    
    @Column()
    is_active: boolean;

    @OneToMany((type) => Orders, orders => orders.paymentMethods)
    orders: Orders[]
}