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
exports.DistrictsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const district_entity_1 = require("../entity/district.entity");
const region_entity_1 = require("../entity/region.entity");
let DistrictsService = class DistrictsService {
    constructor(districtRepo) {
        this.districtRepo = districtRepo;
        this.fillDataDistrict = async () => {
            const allDistricts = await this.districtRepo.find();
            if (allDistricts.length == 0) {
                const fs = require('fs');
                fs.readFile('data/districts.json', (err, data) => {
                    if (err)
                        throw err;
                    const districts = JSON.parse(data);
                    for (const ii in districts) {
                        const id = districts[ii].id;
                        const region_id = districts[ii].region_id;
                        const name = districts[ii].name_uz;
                        this.districtRepo.save([{ id: id, region: region_id, name: name }]);
                    }
                });
            }
            ;
        };
    }
    getAllDistricts() {
        return this.districtRepo.find({
            relations: ['region'],
            select: ['id', 'name'],
        });
    }
    async getSelectDistrict(id) {
        const region = await this.districtRepo.manager
            .getRepository(region_entity_1.Regions)
            .findOne({ where: { id: id } })
            .then((data) => {
            return data.id;
        });
        return this.districtRepo.manager
            .getRepository(district_entity_1.District)
            .find({ where: { region: region } });
    }
};
DistrictsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(district_entity_1.District)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], DistrictsService);
exports.DistrictsService = DistrictsService;
//# sourceMappingURL=districts.service.js.map