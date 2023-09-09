import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import Model from './model.entity';
import { Orders } from './orders.entity';

@Entity('Payments')
export class Payments extends Model {
  @ManyToOne(() => Orders, orders => orders.payments)
  @JoinColumn({name: "order_id"})
  orders: Orders

  @Column()
  order_id: number

  @Column()
  payment_date: Date
  
  @Column()
  amount: number

  @Column({default: false, type:'boolean'})
  in_cash: boolean;
  
  @Column({default: false, type:'boolean'})
  by_card: boolean;
  
  @Column({default: false, type:'boolean'})
  bank: boolean;
}


// @ManyToOne((type) => Sale_details)
// @JoinColumn({ name: 'sale_details_id' })
