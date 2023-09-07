import { CreatePaymentMethodDto } from 'src/dtos/payment-method-dto/create-paymeth.dto';
import { EditPaymentMethodDto } from 'src/dtos/payment-method-dto/update-paymeth.dto';
import { PaymentMethods } from 'src/entity/payment_methods.entity';
import { Repository } from 'typeorm';
export declare class PaymentMethodsService {
    private readonly paymentMethodRepo;
    constructor(paymentMethodRepo: Repository<PaymentMethods>);
    addPaymentMethod(createPaymentMethodDto: CreatePaymentMethodDto): Promise<{
        status: number;
        data: PaymentMethods;
        message: string;
    }>;
    getPaymentMethod(id?: number): Promise<any>;
    updatePaymentMethod(id: number, editPaymentMethodDto: EditPaymentMethodDto): Promise<any>;
    deletePaymentMethod(arrayOfId: number[]): Promise<{
        status: number;
        message: string;
    }>;
}
