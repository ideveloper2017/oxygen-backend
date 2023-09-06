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
exports.PaymentMethodsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_paymeth_dto_1 = require("../dtos/payment-method-dto/create-paymeth.dto");
const update_paymeth_dto_1 = require("../dtos/payment-method-dto/update-paymeth.dto");
const payment_methods_service_1 = require("../service/payment_methods.service");
let PaymentMethodsController = class PaymentMethodsController {
    constructor(paymentMethodsService) {
        this.paymentMethodsService = paymentMethodsService;
    }
    createPaymentMethod(createPaymentMethodDto) {
        return this.paymentMethodsService.addPaymentMethod(createPaymentMethodDto);
    }
    deletePaymentMethod(id) {
        return this.paymentMethodsService.deletePaymentMethod(id);
    }
    getPaymentMethod(id) {
        return this.paymentMethodsService.getPaymentMethod(id);
    }
    editPaymentMethod(id, editPaymentMethod) {
        return this.paymentMethodsService.updatePaymentMethod(id, editPaymentMethod);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Pul birligini qoshish' }),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paymeth_dto_1.CreatePaymentMethodDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "createPaymentMethod", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Pul birligini o'chirish", }),
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "deletePaymentMethod", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Pul birligini olish" }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "getPaymentMethod", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Pul birligini tahrirlash" }),
    (0, common_1.Patch)('/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_paymeth_dto_1.EditPaymentMethodDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "editPaymentMethod", null);
PaymentMethodsController = __decorate([
    (0, swagger_1.ApiTags)('PaymentMethods'),
    (0, common_1.Controller)('payment-methods'),
    __metadata("design:paramtypes", [payment_methods_service_1.PaymentMethodsService])
], PaymentMethodsController);
exports.PaymentMethodsController = PaymentMethodsController;
//# sourceMappingURL=payment_methods.controller.js.map