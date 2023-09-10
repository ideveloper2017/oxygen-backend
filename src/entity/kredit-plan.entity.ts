import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Model from "./model.entity";
import { Orders } from "./orders.entity";




@Entity('CreditTable')
export class CreditTable extends Model {
    @ManyToOne(() => Orders, orders => orders.CreditTables)
    @JoinColumn({name: 'order_id'})
    orders: Orders

    @Column()
    order_id: number
    
    @Column()
    kredit_amount: number
    
    @Column()
    total_amount: number
    
    @Column({enum: ['paid','unpaid']})
    status: string
    
    @Column()
    due_date: Date

}