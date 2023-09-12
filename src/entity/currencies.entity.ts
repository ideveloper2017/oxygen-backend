import {Column, Entity, OneToMany} from 'typeorm';
import Model from './model.entity';
import { ExchangRates } from './exchange-rate.entity';

@Entity('Currencies')
export class Currencies extends Model {
    
    @Column({unique: true})
    name: string;

    @Column()
    is_selected: boolean;

    @OneToMany(() => ExchangRates, exchangeRate => exchangeRate.currencies)
    exchangeRates: ExchangRates[]
}
