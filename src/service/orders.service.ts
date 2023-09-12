import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'src/dtos/order-dto/create-order.dto';
import { UpdateOrderDto } from 'src/dtos/order-dto/update-order.dto';
import { Apartments } from 'src/entity/apartments.entity';
import { CreditTable } from 'src/entity/credit-table.entity';
import { OrderItems } from 'src/entity/order-items.entity';
import { Orders } from 'src/entity/orders.entity';
import { PaymentMethods } from 'src/entity/payment_methods.entity';
import { Repository } from 'typeorm';


@Injectable()
export class OrdersService {
    constructor(@InjectRepository(Orders) private readonly ordersRepository: Repository<Orders>){}

    async getLastID() {
        const lastid = await this.ordersRepository.createQueryBuilder('orders')
        .orderBy('id', 'DESC')
        .getOne()

        return lastid
    }
    async createOrder(createOrderDto: CreateOrderDto) {
        
        // const apartment = await this.ordersRepository.manager.getRepository(Apartments).findOne({where: {id: createOrderDto.apartment_id}, relations: ['floor.entrance.buildings']})

        const payment_method = await this.ordersRepository.manager.getRepository(PaymentMethods).findOne({where: {id: createOrderDto.payment_method_id}})
        
        const order = new Orders()
        order.client_id = createOrderDto.client_id
        order.user_id = createOrderDto.user_id
        order.payment_method_id = createOrderDto.payment_method_id 
        order.order_status = createOrderDto.order_status
        order.order_date = new Date()  
        order.total_amount  = 145200000     
        order.quantity = createOrderDto.apartments.length
        order.is_accepted = createOrderDto.is_accepted
        const savedOrder = await this.ordersRepository.save(order)

        const orderItem = new OrderItems()
        orderItem.order_id = savedOrder.id
        orderItem.apartment_id = createOrderDto.apartment_id

        const price = await this.ordersRepository.manager.getRepository(Apartments).findOne({where: {id: orderItem.apartment_id}, relations: ['floor.entrance.buildings']})

        const total = price.floor.entrance.buildings.mk_price * price.room_space
        const oneMonthDue = (total - createOrderDto.initial_pay) / createOrderDto.installment_month
        // console.log(price.floor.entrance.buildings.mk_price);
        console.log(total-createOrderDto.initial_pay);
        // if(payment_method.name.toLowerCase() === 'rassrochka'){
        //     for(let i = 1; i <= createOrderDto.installment_month; i++){
        //         const installment = new CreditTable()
        //         installment.order_id = savedOrder.id
        //         installment.due_amount
        //         installment.status
        //         installment.due_date
        //     }
        // }
        return savedOrder
    }

    async getOrderList(id: number) {
        let order
        if(id == 0){
             order = await this.ordersRepository.find()
        }else {
            order = await this.ordersRepository.findOne({where: {id: id}, relations: ['apartments', 'apartments.floor.entrance.buildings']});
        }
        return order
    }

    async updateOrder( id:number, updateOrderDto: UpdateOrderDto) {
        const order = await this.ordersRepository.update({id: id}, updateOrderDto)
        return order
    }
   
    async deleteOrder(arrayOfId: number[]) {
        for(let id of arrayOfId) {
            await this.ordersRepository.delete({id: id})
        }

        return arrayOfId.length
    }

    async chooseOrder(id: number ) {
        const order = await this.ordersRepository.update({id: id}, {is_accepted: true})
        return order
    }
}
