"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrancesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entrances_controller_1 = require("../../controller/entrances.controller");
const entrance_entity_1 = require("../../entity/entrance.entity");
const entrances_service_1 = require("../../service/entrances.service");
let EntrancesModule = class EntrancesModule {
};
EntrancesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entrance_entity_1.Entrance])],
        controllers: [entrances_controller_1.EntrancesController],
        providers: [entrances_service_1.EntrancesService],
        exports: [typeorm_1.TypeOrmModule],
    })
], EntrancesModule);
exports.EntrancesModule = EntrancesModule;
//# sourceMappingURL=entrances.module.js.map