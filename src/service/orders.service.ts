import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'src/dtos/order-dto/create-order.dto';
import { UpdateOrderDto } from 'src/dtos/order-dto/update-order.dto';
import { Apartments } from 'src/entity/apartments.entity';
import { InstallmentPayments } from 'src/entity/installment-payments.entity';
import { Orders } from 'src/entity/orders.entity';
import { PaymentMethods } from 'src/entity/payment_methods.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
    constructor(@InjectRepository(Orders) private readonly ordersRepository: Repository<Orders>){}

    async createOrder(createOrderDto: CreateOrderDto) {
        
        // const apartment = await this.ordersRepository.manager.getRepository(Apartments).findOne({where: {id: createOrderDto.apartment_id}, relations: ['floor.entrance.buildings']})

        const payment_method = await this.ordersRepository.manager.getRepository(PaymentMethods).findOne({where: {id: createOrderDto.payment_method_id}})
        

        const order = new Orders()
        order.client_id = createOrderDto.client_id
        order.user_id = createOrderDto.user_id
        order.payment_method_id = createOrderDto.payment_method_id
        order.order_date = new Date()  
        order.total_amount  = null     
        order.quantity = createOrderDto.apartments.length > 1 ? null : 1
        order.is_accepted = createOrderDto.is_accepted
        const savedOrder = await this.ordersRepository.save(order)

        if(payment_method.name === 'rassrochka'){
            for(let i = 1; i< createOrderDto.installment_month; i++){
                const installment = new InstallmentPayments()
                installment.order_id = savedOrder.id
                installment.total_amount
                installment.installment_amount
                installment.status
                installment.start_date
                installment.end_date
            }
        }

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
