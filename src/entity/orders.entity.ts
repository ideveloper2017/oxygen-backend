import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Model from "./model.entity";
import { Clients } from "./clients.entity";
import { Users } from "./users.entity";
import { PaymentMethods } from "./payment_methods.entity";
import { OrderItems } from "./order-items.entity";
import { Payments } from "./payments.entity";
import { CreditTable } from "./kredit-plan.entity";

@Entity('Orders')
export class Orders extends Model {
    @ManyToOne(type => Clients, (clients) => clients.orders)
    @JoinColumn({name: 'client_id'})
    clients: Clients;

    @Column({type: "integer"})
    client_id: number


    @ManyToOne(type => Users, (users) => users.orders)
    @JoinColumn({name: 'user_id'})
    users: Users

    @Column({type: "integer"})
    user_id: number

    @Column()
    quantity: number

    @Column()
    total_amount: number

    @Column()
    is_accepted: boolean;

    @Column()
    order_date: Date

    @ManyToOne((type) => PaymentMethods, paymentMethods => paymentMethods.orders)
    @JoinColumn({name: 'payment_method_id'})
    paymentMethods: PaymentMethods

    @Column()
    payment_method_id: number

    @OneToMany(() => OrderItems, orderItems => orderItems.orders)
    orderItems: OrderItems[]
    
    @OneToMany(() => Payments, payments => payments.orders)
    payments: Payments[]

    @OneToMany(() => CreditTable, CreditTable => CreditTable.orders)
    CreditTables: CreditTable[]
}