import { CreateCurrencyDto } from 'src/dtos/currency-dto/create-currency.dto';
import { CurrenciesService } from 'src/service/currencies.service';
export declare class CurrenciesController {
    private readonly currancyService;
    constructor(currancyService: CurrenciesService);
    addCurrency(createCurrencyDto: CreateCurrencyDto): Promise<{
        status: number;
        data: import("../entity/currencies.entity").Currencies;
        message: string;
    }>;
    viewCurrancies(): Promise<{
        status: number;
        data: import("../entity/currencies.entity").Currencies[];
        message: string;
    }>;
    selectCurrency(currency: number[]): Promise<{
        status: number;
        data: any[];
        message: string;
    }>;
}
