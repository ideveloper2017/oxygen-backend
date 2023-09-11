import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCurrencyDto } from 'src/dtos/currency-dto/create-currency.dto';
import { ExchangeRateDto } from 'src/dtos/currency-dto/exchange-rate.dto';
import { Currencies } from 'src/entity/currencies.entity';
import { ExchangRates } from 'src/entity/exchange-rate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectRepository(Currencies)
    private readonly currencyRepo: Repository<Currencies>,
    @InjectRepository(ExchangRates)
    private readonly exchangeRepo: Repository<ExchangRates>,
  ) {}

  async createCurrency(createCurrencyDto: CreateCurrencyDto) {
    const currency = new Currencies()
    currency.name = createCurrencyDto.name
    currency.is_selected = createCurrencyDto.is_selected

    const result = await this.currencyRepo.save(currency)
    return {status: 201, data: result, message: "Currency added successfully!"}
  }

  async getCurrencies() {
    const currencies = await this.currencyRepo.find();
    return { status: 200, data: currencies, message: 'Success' };
  }

  async selectCurrency(arrayOfId: number[]) {
    for (const id of arrayOfId) {
      await this.currencyRepo.update({ id: id }, { is_selected: true });
    }
    return { status: 200, data: [], message: 'Success' };
  }

  //====================================== EchangeRates Repository logic ===========================

  async newRate(exchangeRateDto:ExchangeRateDto){
    const rate = new ExchangRates()
    rate.rate_value = exchangeRateDto.rate_value
    rate.currency_id = exchangeRateDto.currency_id
    rate.is_default = exchangeRateDto.is_default
    
    const savedRate = await this.exchangeRepo.save(rate)
    return savedRate
  }
}
