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
exports.EntrancesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entrance_entity_1 = require("../entity/entrance.entity");
const typeorm_2 = require("typeorm");
let EntrancesService = class EntrancesService {
    constructor(entanceRepo) {
        this.entanceRepo = entanceRepo;
    }
    async addEntrance(building_id) {
        const lastEntrance = await this.entanceRepo
            .createQueryBuilder('entrances')
            .where('building_id = :building_id', { building_id })
            .orderBy('id', 'DESC')
            .getOne();
        const newEntrance = new entrance_entity_1.Entrance();
        newEntrance.entrance_number = lastEntrance
            ? lastEntrance.entrance_number + 1
            : 1;
        newEntrance.building_id = building_id;
        const res = await this.entanceRepo.save(newEntrance);
        return res;
    }
    async getEntranceOfBuilding(building_id) {
        const entrances = await this.entanceRepo.find({
            where: { building_id: building_id },
            relations: ['floors'],
        });
        return entrances;
    }
    async deleteEmptyEnrances(id) {
        const del = await this.entanceRepo.findOne({
            where: { id: id },
            relations: ['floors'],
        });
        let res;
        if (del) {
            res = await this.entanceRepo.delete(id);
        }
        else {
            res = { message: "o'chirib bo'lmaydi" };
        }
        return res;
    }
};
EntrancesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entrance_entity_1.Entrance)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EntrancesService);
exports.EntrancesService = EntrancesService;
//# sourceMappingURL=entrances.service.js.map