import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Model from "./model.entity";
import { Orders } from "./orders.entity";
import { Apartments } from "./apartments.entity";

@Entity('OrderItems')
export class OrderItems extends Model {

    @ManyToOne(() => Orders, orders => orders.orderItems)
    @JoinColumn({name: "order_id"})
    orders: Orders

    @Column()
    order_id: number
    
    @ManyToOne(() => Apartments, apartment => apartment.orderItems)
    @JoinColumn({name: "apartment_id"})
    apartments: Apartments

    @Column()
    apartment_id: number

    @Column()
    final_price: number
    
    




}