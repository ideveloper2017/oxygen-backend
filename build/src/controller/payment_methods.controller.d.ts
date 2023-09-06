import { CreatePaymentMethodDto } from 'src/dtos/payment-method-dto/create-paymeth.dto';
import { EditPaymentMethodDto } from 'src/dtos/payment-method-dto/update-paymeth.dto';
import { PaymentMethodsService } from 'src/service/payment_methods.service';
export declare class PaymentMethodsController {
    private readonly paymentMethodsService;
    constructor(paymentMethodsService: PaymentMethodsService);
    createPaymentMethod(createPaymentMethodDto: CreatePaymentMethodDto): Promise<{
        status: number;
        data: import("../entity/payment_methods.entity").PaymentMethods;
        message: string;
    }>;
    deletePaymentMethod(id: number[]): Promise<{
        status: number;
        message: string;
    }>;
    getPaymentMethod(id?: number): Promise<any>;
    editPaymentMethod(id: number, editPaymentMethod: EditPaymentMethodDto): Promise<import("typeorm").UpdateResult>;
}
