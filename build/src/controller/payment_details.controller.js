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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetailsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payment_details_service_1 = require("../service/payment_details.service");
let PaymentDetailsController = class PaymentDetailsController {
    constructor(paymentDetailsService) {
        this.paymentDetailsService = paymentDetailsService;
    }
};
PaymentDetailsController = __decorate([
    (0, swagger_1.ApiTags)('PaymentDetails'),
    (0, common_1.Controller)('payment-details'),
    __metadata("design:paramtypes", [payment_details_service_1.PaymentDetailsService])
], PaymentDetailsController);
exports.PaymentDetailsController = PaymentDetailsController;
//# sourceMappingURL=payment_details.controller.js.map