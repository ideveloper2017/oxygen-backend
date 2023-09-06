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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_currency_dto_1 = require("../dtos/currency-dto/create-currency.dto");
const currencies_service_1 = require("../service/currencies.service");
let CurrenciesController = class CurrenciesController {
    constructor(currancyService) {
        this.currancyService = currancyService;
    }
    addCurrency(createCurrencyDto) {
        return this.currancyService.createCurrency(createCurrencyDto);
    }
    viewCurrancies() {
        return this.currancyService.getCurrencies();
    }
    selectCurrency(currency) {
        return this.currancyService.selectCurrency(currency);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Pul birligi qo'shish" }),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_currency_dto_1.CreateCurrencyDto]),
    __metadata("design:returntype", void 0)
], CurrenciesController.prototype, "addCurrency", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Pul birliklari ro'yxatini olish" }),
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CurrenciesController.prototype, "viewCurrancies", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Pul birligini belgilash' }),
    (0, common_1.Patch)('/option'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], CurrenciesController.prototype, "selectCurrency", null);
CurrenciesController = __decorate([
    (0, swagger_1.ApiTags)('Currencies'),
    (0, common_1.Controller)('currency'),
    __metadata("design:paramtypes", [currencies_service_1.CurrenciesService])
], CurrenciesController);
exports.CurrenciesController = CurrenciesController;
//# sourceMappingURL=currencies.controller.js.map