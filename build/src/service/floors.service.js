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
exports.FloorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const floor_entity_1 = require("../entity/floor.entity");
const typeorm_2 = require("typeorm");
let FloorsService = class FloorsService {
    constructor(floorRepository) {
        this.floorRepository = floorRepository;
    }
    async addFloor(entrance_id) {
        const lastFloor = await this.floorRepository.createQueryBuilder('floor')
            .where('entrance_id = :entrance_id', { entrance_id })
            .orderBy('id', 'DESC')
            .getOne();
        const newFloor = new floor_entity_1.Floor();
        newFloor.floor_number = lastFloor ? lastFloor.floor_number + 1 : 1;
        newFloor.entrance_id = entrance_id;
        let result = await this.floorRepository.save(newFloor);
        return result;
    }
    async getFloorOfEntrance(entrance_id) {
        const floors = await this.floorRepository.find({ where: { entrance_id: entrance_id } });
        return floors;
    }
    async deleteFloor(id) {
        const del = await this.floorRepository.findOne({ where: { id: id }, relations: ['apartments'] });
        let res;
        if (del) {
            res = await this.floorRepository.delete(id);
        }
        else {
            res = { message: "o'chirib bo'lmaydi" };
        }
        return res;
    }
};
FloorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(floor_entity_1.Floor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FloorsService);
exports.FloorsService = FloorsService;
//# sourceMappingURL=floors.service.js.map