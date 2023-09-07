import { ApiProperty } from "@nestjs/swagger";
import { Apartments } from "src/entity/apartments.entity";
import { Clients } from "src/entity/clients.entity";
import { Users } from "src/entity/users.entity";

export class CreateOrderDto {
    @ApiProperty({example: 1, description: "ro'yxatdan o'tgan mijoz idisi" })
    client_id: number

    @ApiProperty({example: 1,  description: "buyurtma rasmiylashtirgan xodim idisi" })
    user_id: number

    @ApiProperty({example: 1, description: 'kvartira tanlanadi'})
    apartment_id: number
    
    
    @ApiProperty({example: 1, description: "to'lov turi tanlanadi"})
    payment_method_id: number

    @ApiProperty({example:455_000_000, description: "kvartira umumiy narxi"})
    total_price: number

    @ApiProperty({example:"2023-09-04"})
    order_date: Date

    @ApiProperty({example: 2, description: "nechta kvartira olayotgani"})
    quantity: number

    @ApiProperty({example: false, description: "buyurtma qabul qilingan yoki yoqligi"})
    is_accepted: boolean
    
}