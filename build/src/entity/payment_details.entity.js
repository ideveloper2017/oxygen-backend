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
exports.Payment_Details = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const sale_details_entity_1 = require("./sale_details.entity");
let Payment_Details = class Payment_Details extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.ManyToOne)((type) => sale_details_entity_1.Sale_details),
    (0, typeorm_1.JoinColumn)({ name: 'sale_details_id' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment_Details.prototype, "paid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment_Details.prototype, "in_cash", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment_Details.prototype, "by_card", void 0);
Payment_Details = __decorate([
    (0, typeorm_1.Entity)('Payment_Details')
], Payment_Details);
exports.Payment_Details = Payment_Details;
//# sourceMappingURL=payment_details.entity.js.map