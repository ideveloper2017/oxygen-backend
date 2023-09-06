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
exports.BuildingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_building_dto_1 = require("../dtos/building-dto/create-building.dto");
const update_building_dto_1 = require("../dtos/building-dto/update-building.dto");
const buildings_service_1 = require("../service/buildings.service");
let BuildingsController = class BuildingsController {
    constructor(buildingsService) {
        this.buildingsService = buildingsService;
    }
    addBuilding(createBuildingDto) {
        return this.buildingsService.createBuilding(createBuildingDto).then(response => {
            if (response.length != 0) {
                return { success: true, data: response, message: 'Building added successfully' };
            }
            else if (response) {
                return { success: true, data: response, message: 'Empty building added successfully' };
            }
        });
    }
    getAllBuildings() {
        return this.buildingsService.findAllBuildings().then(response => {
            if (response.length != 0) {
                return { success: true, data: response, message: 'Data fetched successfully' };
            }
            else {
                return { success: false, message: "No data found!" };
            }
        }).catch(error => {
            return { success: false, message: error.message };
        });
    }
    getTestBuildings(town_id, res) {
        return this.buildingsService.getBuldingsOfTown(town_id).then((data) => {
            if (data.length > 0) {
                return res.status(200).send({
                    success: true,
                    data: data,
                    message: 'found record!!!',
                });
            }
            else {
                res.status(200).send({
                    success: false,
                    data: null,
                    message: 'not found record!!!',
                });
            }
        })
            .catch((error) => {
            res
                .status(200)
                .send({ success: false, data: null, message: 'not found record!!!' });
        });
    }
    editBuilding(id, updateBuildingDto) {
        return this.buildingsService.updateBuilding(id, updateBuildingDto).then(data => {
            if (data.affected) {
                return { success: true, message: "Bino tahrirlandi." };
            }
            else {
                return { success: false, message: "Bino topilmadi." };
            }
        }).catch(error => console.log(error));
    }
    deleteBuilding(id) {
        return this.buildingsService.deleteBuilding(id).then(data => {
            if (data.affected != 0) {
                return { success: true, message: "Bino o'chirildi" };
            }
            return { success: false, message: 'Bino topilmadi' };
        }).catch(error => console.log(error));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Bino yaratish ichidagi kvartiralari bilan' }),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_building_dto_1.CreateBuildingDto]),
    __metadata("design:returntype", void 0)
], BuildingsController.prototype, "addBuilding", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Mavjud barcha binolar ro'yxatini olish" }),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildingsController.prototype, "getAllBuildings", null);
__decorate([
    (0, common_1.Get)('/:town_id'),
    __param(0, (0, common_1.Param)('town_id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BuildingsController.prototype, "getTestBuildings", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Bino tahrirlash' }),
    (0, common_1.Patch)('/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_building_dto_1.UpdateBuildingDto]),
    __metadata("design:returntype", void 0)
], BuildingsController.prototype, "editBuilding", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bino o'chirish" }),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BuildingsController.prototype, "deleteBuilding", null);
BuildingsController = __decorate([
    (0, swagger_1.ApiTags)('Buildings'),
    (0, common_1.Controller)('buildings'),
    __metadata("design:paramtypes", [buildings_service_1.BuildingsService])
], BuildingsController);
exports.BuildingsController = BuildingsController;
//# sourceMappingURL=buildings.controller.js.map