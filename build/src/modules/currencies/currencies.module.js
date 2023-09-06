"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const currencies_controller_1 = require("../../controller/currencies.controller");
const currencies_entity_1 = require("../../entity/currencies.entity");
const currencies_service_1 = require("../../service/currencies.service");
let CurrenciesModule = class CurrenciesModule {
};
CurrenciesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([currencies_entity_1.Currencies])],
        controllers: [currencies_controller_1.CurrenciesController],
        providers: [currencies_service_1.CurrenciesService],
        exports: [typeorm_1.TypeOrmModule],
    })
], CurrenciesModule);
exports.CurrenciesModule = CurrenciesModule;
//# sourceMappingURL=currencies.module.js.map