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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const currencies_entity_1 = require("../entity/currencies.entity");
const typeorm_2 = require("typeorm");
let CurrenciesService = class CurrenciesService {
    constructor(currencyRepo) {
        this.currencyRepo = currencyRepo;
    }
    async createCurrency(createCurrencyDto) {
        const currency = new currencies_entity_1.Currencies();
        currency.name = createCurrencyDto.name;
        currency.is_selected = createCurrencyDto.is_selected;
        const result = await this.currencyRepo.save(currency);
        return { status: 201, data: result, message: "Currency added successfully!" };
    }
    async getCurrencies() {
        const currencies = await this.currencyRepo.find();
        return { status: 200, data: currencies, message: 'Success' };
    }
    async selectCurrency(arrayOfId) {
        for (const id of arrayOfId) {
            await this.currencyRepo.update({ id: id }, { is_selected: true });
        }
        return { status: 200, data: [], message: 'Success' };
    }
};
CurrenciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(currencies_entity_1.Currencies)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CurrenciesService);
exports.CurrenciesService = CurrenciesService;
//# sourceMappingURL=currencies.service.js.map