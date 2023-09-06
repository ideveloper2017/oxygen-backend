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
exports.RegionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const region_entity_1 = require("../entity/region.entity");
let RegionsService = class RegionsService {
    constructor(regionRepository) {
        this.regionRepository = regionRepository;
    }
    getAllRegion() {
        return this.regionRepository.find();
    }
    insertRegion(regionDto) {
        return this.regionRepository.save(regionDto);
    }
    async fillDataRegion() {
        let regiondata;
        if (this.regionRepository.exist()) {
            regiondata = await this.regionRepository.save([
                { id: 1, name: 'Qoraqalpog‘iston Respublikasi' },
                { id: 2, name: 'Andijon viloyati' },
                { id: 3, name: 'Buxoro viloyati' },
                { id: 4, name: 'Jizzax viloyati' },
                { id: 5, name: 'Qashqadaryo viloyati' },
                { id: 6, name: 'Navoiy viloyati' },
                { id: 7, name: 'Namangan viloyati' },
                { id: 8, name: 'Samarqand viloyati' },
                { id: 9, name: 'Surxandaryo viloyati' },
                { id: 10, name: 'Sirdaryo viloyati' },
                { id: 11, name: 'Toshkent viloyati' },
                { id: 12, name: 'Farg‘ona viloyati' },
                { id: 13, name: 'Xorazm viloyati' },
                { id: 14, name: 'Toshkent shahri' },
            ]);
        }
        return regiondata;
    }
};
RegionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(region_entity_1.Regions)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RegionsService);
exports.RegionsService = RegionsService;
//# sourceMappingURL=regions.service.js.map