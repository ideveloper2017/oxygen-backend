import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Model from "./model.entity";
import { Orders } from "./orders.entity";




@Entity('InstallmentPayments')
export class InstallmentPayments extends Model {
    @ManyToOne(() => Orders, orders => orders.installmentPayments)
    @JoinColumn({name: 'order_id'})
    orders: Orders

    @Column()
    order_id: number
    
    @Column()
    installment_amount: number
    
    @Column()
    total_amount: number
    
    @Column({enum: ['paid', 'waiting','unpaid']})
    status: string
    
    @Column()
    start_date: Date
    
    @Column()
    end_date: Date



}