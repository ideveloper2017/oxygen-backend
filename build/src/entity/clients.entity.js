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
exports.Clients = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const sales_entity_1 = require("./sales.entity");
const orders_entity_1 = require("./orders.entity");
let Clients = class Clients extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clients.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clients.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clients.prototype, "middle_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: ['male', 'female'] }),
    __metadata("design:type", String)
], Clients.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: ['jismoniy', 'yuridik'] }),
    __metadata("design:type", String)
], Clients.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clients.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Clients.prototype, "contact_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Clients.prototype, "date_of_birth", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Clients.prototype, "passport_seria", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Clients.prototype, "given_from", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Clients.prototype, "given_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Clients.prototype, "untill_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Clients.prototype, "legal_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Clients.prototype, "registered_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Clients.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => sales_entity_1.Sales, (sales) => sales.clients),
    __metadata("design:type", Array)
], Clients.prototype, "sales", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => orders_entity_1.Orders, (orders) => orders.clients),
    __metadata("design:type", Array)
], Clients.prototype, "orders", void 0);
Clients = __decorate([
    (0, typeorm_1.Entity)('Clients')
], Clients);
exports.Clients = Clients;
//# sourceMappingURL=clients.entity.js.map