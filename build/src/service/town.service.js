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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TownService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const town_entity_1 = require("../entity/town.entity");
const typeorm_2 = require("typeorm");
const regions_service_1 = require("./regions.service");
const districts_service_1 = require("./districts.service");
const roles_service_1 = require("./roles.service");
const permissions_service_1 = require("./permissions.service");
let TownService = class TownService {
    constructor(townRepository, regionService, districtService, roleService, permissionService) {
        this.townRepository = townRepository;
        this.regionService = regionService;
        this.districtService = districtService;
        this.roleService = roleService;
        this.permissionService = permissionService;
    }
    async createTown(createTownDto) {
        const town = await this.townRepository.findOne({
            where: { name: createTownDto.name },
        });
        if (!town) {
            const newTown = await this.townRepository.save(createTownDto);
            return {
                status: 201,
                data: newTown,
                message: 'Town created successfully',
            };
        }
        else {
            return { status: 400, message: 'Bu nomdagi turar-joy mavjud' };
        }
    }
    async findAllTowns() {
        const towns = await this.townRepository.find({ relations: ['buildings'] });
        return towns;
    }
    async updateTown(id, updateTownDto) {
        const updatedTown = await this.townRepository.update(id, updateTownDto);
        return updatedTown;
    }
    async deleteTown(id) {
        const deletedTown = await this.townRepository.delete(id);
        return deletedTown;
    }
    async clearDatabase() {
        var _a, e_1, _b, _c;
        const connection = this.townRepository.manager.connection;
        let queryRunner = connection.createQueryRunner();
        const table_names = connection.entityMetadatas.map(entity => entity.tableName);
        const check = [];
        try {
            for (var _d = true, table_names_1 = __asyncValues(table_names), table_names_1_1; table_names_1_1 = await table_names_1.next(), _a = table_names_1_1.done, !_a;) {
                _c = table_names_1_1.value;
                _d = false;
                try {
                    const table_name = _c;
                    let res = await queryRunner.query(`TRUNCATE TABLE "${table_name}" RESTART IDENTITY CASCADE`);
                    check.push(res);
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = table_names_1.return)) await _b.call(table_names_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        await this.regionService.fillDataRegion();
        await this.districtService.fillDataDistrict();
        await this.roleService.filldata();
        await this.permissionService.filldata();
        return table_names.length == check.length ? true : false;
    }
};
TownService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(town_entity_1.Towns)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        regions_service_1.RegionsService,
        districts_service_1.DistrictsService,
        roles_service_1.RolesService,
        permissions_service_1.PermissionsService])
], TownService);
exports.TownService = TownService;
//# sourceMappingURL=town.service.js.map