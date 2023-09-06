import { Response } from 'express';
import { CreateOrderDto } from 'src/dtos/order-dto/create-order.dto';
import { UpdateOrderDto } from 'src/dtos/order-dto/update-order.dto';
import { OrdersService } from 'src/service/orders.service';
export declare class OrdersController {
    private readonly orderService;
    constructor(orderService: OrdersService);
    createOrder(createOrderDto: CreateOrderDto, res: Response): Promise<void>;
    getOrder(id?: number): Promise<{
        data: any;
        message: string;
        success?: undefined;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    editOpder(id: number, editOrderDto: UpdateOrderDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteOrder(arrayOfId: number[]): Promise<{
        success: boolean;
        message: string;
    }>;
    acceptOrRejectOrder(id: number): Promise<import("typeorm").UpdateResult>;
}
