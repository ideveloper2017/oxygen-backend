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
exports.Orders = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const clients_entity_1 = require("./clients.entity");
const users_entity_1 = require("./users.entity");
const apartments_entity_1 = require("./apartments.entity");
const payment_methods_entity_1 = require("./payment_methods.entity");
const order_items_entity_1 = require("./order-items.entity");
let Orders = class Orders extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.ManyToOne)(type => clients_entity_1.Clients, (clients) => clients.orders),
    (0, typeorm_1.JoinColumn)({ name: 'client_id' }),
    __metadata("design:type", clients_entity_1.Clients)
], Orders.prototype, "clients", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer" }),
    __metadata("design:type", Number)
], Orders.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => apartments_entity_1.Apartments, apartments => apartments.orders),
    (0, typeorm_1.JoinColumn)({ name: 'apartment_id' }),
    __metadata("design:type", apartments_entity_1.Apartments)
], Orders.prototype, "apartments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Orders.prototype, "apartment_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => users_entity_1.Users, (users) => users.orders),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", users_entity_1.Users)
], Orders.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer" }),
    __metadata("design:type", Number)
], Orders.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Orders.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Orders.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Orders.prototype, "is_accepted", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Orders.prototype, "order_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => payment_methods_entity_1.PaymentMethods, paymentMethods => paymentMethods.orders),
    (0, typeorm_1.JoinColumn)({ name: 'payment_method_id' }),
    __metadata("design:type", payment_methods_entity_1.PaymentMethods)
], Orders.prototype, "paymentMethods", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Orders.prototype, "payment_method_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_items_entity_1.OrderItems, orderItems => orderItems.orders),
    __metadata("design:type", Array)
], Orders.prototype, "orderItems", void 0);
Orders = __decorate([
    (0, typeorm_1.Entity)('Orders')
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=orders.entity.js.map