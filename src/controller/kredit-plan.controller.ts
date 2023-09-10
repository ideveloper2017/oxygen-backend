import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreditTableService } from 'src/service/credit-table.service';

@ApiTags("CreditTable")
@Controller('kredit-plan')
export class CreditTableController {

    constructor(private readonly installmentPayService: CreditTableService){}


}
