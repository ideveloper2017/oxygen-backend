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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const payment_methods_entity_1 = require("../entity/payment_methods.entity");
const typeorm_2 = require("typeorm");
let PaymentMethodsService = class PaymentMethodsService {
    constructor(paymentMethodRepo) {
        this.paymentMethodRepo = paymentMethodRepo;
    }
    async addPaymentMethod(createPaymentMethodDto) {
        let paymentMethod = new payment_methods_entity_1.PaymentMethods();
        paymentMethod.name = createPaymentMethodDto.name;
        paymentMethod.is_active = createPaymentMethodDto.is_active;
        paymentMethod = await this.paymentMethodRepo.save(paymentMethod);
        return { status: 201, data: paymentMethod, message: "To'lov turi qo'shildi" };
    }
    async getPaymentMethod(id) {
        let paymentMethod;
        if (id != 0) {
            paymentMethod = await this.paymentMethodRepo.findOne({ where: { id: id } });
        }
        else {
            paymentMethod = await this.paymentMethodRepo.find();
        }
        return paymentMethod;
    }
    async updatePaymentMethod(id, editPaymentMethodDto) {
        const paymentMethod = await this.paymentMethodRepo.update(id, editPaymentMethodDto);
        return paymentMethod;
    }
    async deletePaymentMethod(arrayOfId) {
        for (let id of arrayOfId) {
            await this.paymentMethodRepo.delete({ id: +id });
        }
        return { status: 200, message: "To'lov turi o'chirildi!" };
    }
};
PaymentMethodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_methods_entity_1.PaymentMethods)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PaymentMethodsService);
exports.PaymentMethodsService = PaymentMethodsService;
//# sourceMappingURL=payment_methods.service.js.map