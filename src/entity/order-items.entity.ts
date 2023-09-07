import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Model from "./model.entity";
import { Orders } from "./orders.entity";
import { Towns } from "./town.entity";
import { Entrance } from "./entrance.entity";
import { Floor } from "./floor.entity";
import { Apartments } from "./apartments.entity";

@Entity('OrderItems')
export class OrderItems extends Model {

    @ManyToOne(() => Orders, orders => orders.orderItems)
    @JoinColumn({name: "order_id"})
    orders: Orders

    
    @ManyToOne(() => Apartments, apartment => apartment.orderItems)
    @JoinColumn({name: "apartment_id"})
    apartments: Apartments
    
    @Column()
    room_space: string
    
    @Column()
    final_price: number

    @Column()
    quantity: number


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