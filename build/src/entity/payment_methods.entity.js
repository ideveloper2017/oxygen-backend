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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethods = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const swagger_1 = require("@nestjs/swagger");
const orders_entity_1 = require("./orders.entity");
let PaymentMethods = class PaymentMethods extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], PaymentMethods.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PaymentMethods.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => orders_entity_1.Orders, orders => orders.paymentMethods),
    __metadata("design:type", Array)
], PaymentMethods.prototype, "orders", void 0);
PaymentMethods = __decorate([
    (0, swagger_1.ApiTags)('Payment_Methods'),
    (0, typeorm_1.Entity)('PaymentMethods')
], PaymentMethods);
exports.PaymentMethods = PaymentMethods;
//# sourceMappingURL=payment_methods.entity.js.map