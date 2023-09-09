import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InstallmentPaymentsService } from 'src/service/installment-payments.service';

@ApiTags("Bo'lib to'lash")
@Controller('installment-payments')
export class InstallmentPaymentsController {

    constructor(private readonly installmentPayService: InstallmentPaymentsService){}


}
