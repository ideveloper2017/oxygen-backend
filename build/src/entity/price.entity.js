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
exports.Price = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const apartments_entity_1 = require("./apartments.entity");
let Price = class Price extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.ManyToOne)((type) => apartments_entity_1.Apartments, (apartments) => apartments.price),
    (0, typeorm_1.JoinColumn)({ name: 'apartment_id' }),
    __metadata("design:type", apartments_entity_1.Apartments)
], Price.prototype, "apartment_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Price.prototype, "apartment_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Price.prototype, "is_active_price", void 0);
Price = __decorate([
    (0, typeorm_1.Entity)('Price')
], Price);
exports.Price = Price;
//# sourceMappingURL=price.entity.js.map