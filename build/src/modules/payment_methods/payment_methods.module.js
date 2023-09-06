"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const payment_methods_controller_1 = require("../../controller/payment_methods.controller");
const payment_methods_entity_1 = require("../../entity/payment_methods.entity");
const payment_methods_service_1 = require("../../service/payment_methods.service");
let PaymentMethodsModule = class PaymentMethodsModule {
};
PaymentMethodsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([payment_methods_entity_1.PaymentMethods])],
        controllers: [payment_methods_controller_1.PaymentMethodsController],
        providers: [payment_methods_service_1.PaymentMethodsService],
        exports: [typeorm_1.TypeOrmModule]
    })
], PaymentMethodsModule);
exports.PaymentMethodsModule = PaymentMethodsModule;
//# sourceMappingURL=payment_methods.module.js.map