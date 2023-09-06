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
exports.Buildings = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const town_entity_1 = require("./town.entity");
const entrance_entity_1 = require("./entrance.entity");
let Buildings = class Buildings extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.ManyToOne)((type) => town_entity_1.Towns, (town) => town.buildings),
    (0, typeorm_1.JoinColumn)({ name: 'town_id' }),
    __metadata("design:type", town_entity_1.Towns)
], Buildings.prototype, "towns", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Buildings.prototype, "town_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Buildings.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Buildings.prototype, "entrance_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Buildings.prototype, "floor_number", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => entrance_entity_1.Entrance, (entrance) => entrance.buildings),
    __metadata("design:type", Array)
], Buildings.prototype, "entrances", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Buildings.prototype, "apartment_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Buildings.prototype, "mk_price", void 0);
Buildings = __decorate([
    (0, typeorm_1.Entity)('Buildings')
], Buildings);
exports.Buildings = Buildings;
//# sourceMappingURL=buildings.entity.js.map