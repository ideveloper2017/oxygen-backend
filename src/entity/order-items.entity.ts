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
// @ManyToOne(() => Towns, towns => towns.orderItems)
// @JoinColumn({name: "town_id"})
// towns: Towns

// @ManyToOne(() => Entrance, entrance => entrance.orderItems)
// @JoinColumn({name: "entrance_id"})
// entrances: Entrance

// @Column()
// entrance_id: number

// @ManyToOne(() => Floor, floor => floor.orderItems)
// @JoinColumn({name: "floor_id"})
// floors: Floor