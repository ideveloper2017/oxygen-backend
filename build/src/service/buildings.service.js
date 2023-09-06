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
exports.BuildingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const buildings_entity_1 = require("../entity/buildings.entity");
const typeorm_2 = require("@nestjs/typeorm");
const apartments_entity_1 = require("../entity/apartments.entity");
const floor_entity_1 = require("../entity/floor.entity");
const entrance_entity_1 = require("../entity/entrance.entity");
let BuildingsService = class BuildingsService {
    constructor(buildingRepository) {
        this.buildingRepository = buildingRepository;
    }
    async createBuilding(createBuildingDto) {
        let building = new buildings_entity_1.Buildings();
        building.name = createBuildingDto.name;
        building.town_id = createBuildingDto.town_id;
        building.entrance_number = createBuildingDto.entrance_number;
        building.floor_number = createBuildingDto.floor_number;
        building.apartment_number = createBuildingDto.apartment_number;
        building.mk_price = createBuildingDto.mk_price;
        building = await this.buildingRepository.save(building);
        console.log(building);
        let kv = 1;
        const records = [];
        for (let blok = 1; blok <= building.entrance_number; blok++) {
            const entrance = new entrance_entity_1.Entrance();
            entrance.buildings = building;
            entrance.entrance_number = blok;
            await this.buildingRepository.manager.getRepository(entrance_entity_1.Entrance).save(entrance);
            for (let layer = 1; layer <= building.floor_number; layer++) {
                const floor = new floor_entity_1.Floor();
                floor.floor_number = layer;
                floor.entrance = entrance;
                await this.buildingRepository.manager.getRepository(floor_entity_1.Floor).save(floor);
                for (let apartment = 1; apartment <= building.apartment_number; apartment++) {
                    const apartment = new apartments_entity_1.Apartments();
                    apartment.floor = floor;
                    apartment.room_number = kv++;
                    apartment.cells = 1;
                    apartment.status = 'free';
                    apartment.room_space = 58;
                    records.push(apartment);
                }
            }
        }
        const result = await this.buildingRepository.manager.getRepository(apartments_entity_1.Apartments)
            .save(records);
        return result;
    }
    async findAllBuildings() {
        const result = await this.buildingRepository.find({ relations: ['entrances', 'entrances.floors', 'entrances.floors.apartments'] });
        return result;
    }
    async getBuilding(id) {
        return await this.buildingRepository.find({
            where: { id: id },
        });
    }
    async updateBuilding(id, updateBuildingDto) {
        const building = await this.buildingRepository.update({ id: id }, updateBuildingDto);
        return building;
    }
    async deleteBuilding(id) {
        const result = await this.buildingRepository.delete(id);
        return result;
    }
    async getBuldingsOfTown(town_id) {
        const result = await this.buildingRepository.createQueryBuilder('buildings').select().where('town_id = :town_id', { town_id })
            .getMany();
        return result;
    }
};
BuildingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(buildings_entity_1.Buildings)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BuildingsService);
exports.BuildingsService = BuildingsService;
//# sourceMappingURL=buildings.service.js.map