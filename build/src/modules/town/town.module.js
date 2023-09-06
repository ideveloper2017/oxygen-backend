"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TownModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const town_controller_1 = require("../../controller/town.controller");
const town_entity_1 = require("../../entity/town.entity");
const town_service_1 = require("../../service/town.service");
const roles_module_1 = require("../roles/roles.module");
const premissions_module_1 = require("../premissions/premissions.module");
let TownModule = class TownModule {
};
TownModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([town_entity_1.Towns]), roles_module_1.RolesModule, premissions_module_1.PermissionsModule],
        providers: [town_service_1.TownService],
        controllers: [town_controller_1.TownController],
        exports: [typeorm_1.TypeOrmModule],
    })
], TownModule);
exports.TownModule = TownModule;
//# sourceMappingURL=town.module.js.map