import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewPaymentDto } from 'src/dtos/payment-method-dto/new-payment.dto';
import { Payments } from 'src/entity/payments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments) private readonly paymentsRepository: Repository<Payments>) {}

    async newPayment(newPaymentDto: NewPaymentDto){
      const payment = new Payments()
      payment.order_id = newPaymentDto.order_id
      payment.amount = newPaymentDto.amount
      payment.by_card= newPaymentDto.by_card
      payment.in_cash = newPaymentDto.in_cash
      payment.bank = newPaymentDto.bank

      const newPay = await this.paymentsRepository.save(payment)
      
      return newPay
    }
    


  }
