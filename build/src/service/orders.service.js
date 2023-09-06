"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orders_entity_1 = require("../entity/orders.entity");
const typeorm_2 = require("typeorm");
let OrdersService = class OrdersService {
    constructor(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    async createOrder(createOrderDto) {
        const order = new orders_entity_1.Orders();
        order.user_id = createOrderDto.user_id;
        order.client_id = createOrderDto.client_id;
        order.is_accepted = createOrderDto.is_accepted;
        return await this.ordersRepository.save(order);
    }
    async getOrderList(id) {
        let order;
        if (id == 0) {
            order = await this.ordersRepository.find();
        }
        else {
            order = await this.ordersRepository.findOne({ where: { id: id } });
        }
        return order;
    }
    async updateOrder(id, updateOrderDto) {
        const order = await this.ordersRepository.update({ id: id }, updateOrderDto);
        return order;
    }
    async deleteOrder(arrayOfId) {
        for (let id of arrayOfId) {
            await this.ordersRepository.delete({ id: id });
        }
        return arrayOfId.length;
    }
    async chooseOrder(id) {
        const order = await this.ordersRepository.update({ id: id }, { is_accepted: true });
        return order;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orders_entity_1.Orders)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map