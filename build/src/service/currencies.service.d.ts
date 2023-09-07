import { CreateCurrencyDto } from 'src/dtos/currency-dto/create-currency.dto';
import { Currencies } from 'src/entity/currencies.entity';
import { Repository } from 'typeorm';
export declare class CurrenciesService {
    private readonly currencyRepo;
    constructor(currencyRepo: Repository<Currencies>);
    createCurrency(createCurrencyDto: CreateCurrencyDto): Promise<{
        status: number;
        data: any;
        message: string;
    }>;
    getCurrencies(): Promise<{
        status: number;
        data: any;
        message: string;
    }>;
    selectCurrency(arrayOfId: number[]): Promise<{
        status: number;
        data: any[];
        message: string;
    }>;
}
