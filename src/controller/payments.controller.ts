import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NewPaymentDto } from 'src/dtos/payment-method-dto/new-payment.dto';
import { PaymentsService } from 'src/service/payments.service';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiOperation({summary: "To'lov amalga oshirish"})
  @Post('/new-payment')
  newPayment(@Body() newPaymentDto: NewPaymentDto){
    return this.paymentsService.newPayment(newPaymentDto).then(data => {
      if(!data){
        return {success: false , message: "Payment was not created"}
      }else {
        return {success: true , message: "Payment created"}
      }
    })
  }
}
