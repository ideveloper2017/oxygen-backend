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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const region_entity_1 = require("../../entity/region.entity");
const regions_controller_1 = require("../../controller/regions.controller");
const regions_service_1 = require("../../service/regions.service");
const districts_service_1 = require("../../service/districts.service");
const district_entity_1 = require("../../entity/district.entity");
let RegionsModule = class RegionsModule {
    constructor(regionService) {
        this.regionService = regionService;
    }
};
RegionsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([region_entity_1.Regions, district_entity_1.District])],
        controllers: [regions_controller_1.RegionsController],
        providers: [regions_service_1.RegionsService, districts_service_1.DistrictsService],
        exports: [typeorm_1.TypeOrmModule, regions_service_1.RegionsService, districts_service_1.DistrictsService],
    }),
    __metadata("design:paramtypes", [regions_service_1.RegionsService])
], RegionsModule);
exports.RegionsModule = RegionsModule;
//# sourceMappingURL=regions.module.js.map