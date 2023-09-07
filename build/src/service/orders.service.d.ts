import { CreateOrderDto } from 'src/dtos/order-dto/create-order.dto';
import { UpdateOrderDto } from 'src/dtos/order-dto/update-order.dto';
import { Orders } from 'src/entity/orders.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: Repository<Orders>);
    createOrder(createOrderDto: CreateOrderDto): Promise<any>;
    getOrderList(id: number): Promise<any>;
    updateOrder(id: number, updateOrderDto: UpdateOrderDto): Promise<any>;
    deleteOrder(arrayOfId: number[]): Promise<number>;
    chooseOrder(id: number): Promise<any>;
}
