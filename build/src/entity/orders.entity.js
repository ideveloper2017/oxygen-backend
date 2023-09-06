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
    __metadata("design:type", Boolean)
], Orders.prototype, "is_accepted", void 0);
Orders = __decorate([
    (0, typeorm_1.Entity)('Orders')
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=orders.entity.js.map