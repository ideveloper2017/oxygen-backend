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
exports.Sale_details = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const apartments_entity_1 = require("./apartments.entity");
let Sale_details = class Sale_details extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.ManyToOne)((type) => apartments_entity_1.Apartments, (apartments) => apartments.sales_details),
    (0, typeorm_1.JoinColumn)({ name: 'apartment_id' }),
    __metadata("design:type", Array)
], Sale_details.prototype, "apartment_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Sale_details.prototype, "price", void 0);
Sale_details = __decorate([
    (0, typeorm_1.Entity)('Sale_details')
], Sale_details);
exports.Sale_details = Sale_details;
//# sourceMappingURL=sale_details.entity.js.map