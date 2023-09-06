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
exports.Entrance = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const buildings_entity_1 = require("./buildings.entity");
const floor_entity_1 = require("./floor.entity");
let Entrance = class Entrance extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Number)
], Entrance.prototype, "entrance_number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => buildings_entity_1.Buildings, building => building.entrances),
    (0, typeorm_1.JoinColumn)({ name: "building_id" }),
    __metadata("design:type", buildings_entity_1.Buildings)
], Entrance.prototype, "buildings", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Entrance.prototype, "building_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => floor_entity_1.Floor, floor => floor.entrance, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Entrance.prototype, "floors", void 0);
Entrance = __decorate([
    (0, typeorm_1.Entity)('Entrances')
], Entrance);
exports.Entrance = Entrance;
//# sourceMappingURL=entrance.entity.js.map