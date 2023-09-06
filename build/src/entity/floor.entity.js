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
exports.Floor = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const apartments_entity_1 = require("./apartments.entity");
const entrance_entity_1 = require("./entrance.entity");
let Floor = class Floor extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Number)
], Floor.prototype, "floor_number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => entrance_entity_1.Entrance, (entrance) => entrance.floors, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: "entrance_id" }),
    __metadata("design:type", entrance_entity_1.Entrance)
], Floor.prototype, "entrance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Floor.prototype, "entrance_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => apartments_entity_1.Apartments, (apartment) => apartment.floor),
    __metadata("design:type", Array)
], Floor.prototype, "apartments", void 0);
Floor = __decorate([
    (0, typeorm_1.Entity)('Floor')
], Floor);
exports.Floor = Floor;
//# sourceMappingURL=floor.entity.js.map