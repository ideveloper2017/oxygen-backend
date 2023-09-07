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
exports.OrderItems = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const orders_entity_1 = require("./orders.entity");
const apartments_entity_1 = require("./apartments.entity");
let OrderItems = class OrderItems extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => orders_entity_1.Orders, orders => orders.orderItems),
    (0, typeorm_1.JoinColumn)({ name: "order_id" }),
    __metadata("design:type", orders_entity_1.Orders)
], OrderItems.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => apartments_entity_1.Apartments, apartment => apartment.orderItems),
    (0, typeorm_1.JoinColumn)({ name: "apartment_id" }),
    __metadata("design:type", apartments_entity_1.Apartments)
], OrderItems.prototype, "apartments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderItems.prototype, "room_space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItems.prototype, "final_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItems.prototype, "quantity", void 0);
OrderItems = __decorate([
    (0, typeorm_1.Entity)('OrderItems')
], OrderItems);
exports.OrderItems = OrderItems;
//# sourceMappingURL=order-items.entity.js.map