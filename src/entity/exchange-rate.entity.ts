import { Column, Entity, ManyToOne } from "typeorm";
import Model from "./model.entity";
import { Currencies } from "./currencies.entity";


@Entity('ExchangeRates')
export class ExchangRates extends Model {
    @Column({type: 'float'})
    rate_value: number
    
    @Column()
    is_default: boolean 

    @ManyToOne(() => Currencies, currencies => currencies.exchangeRates)
    currencies: Currencies

    @Column()
    currency_id: number

}