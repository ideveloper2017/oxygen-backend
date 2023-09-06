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
exports.RegionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const regions_service_1 = require("../service/regions.service");
const districts_service_1 = require("../service/districts.service");
const region_dto_1 = require("../dtos/region.dto");
let RegionsController = class RegionsController {
    constructor(regionService, distrService) {
        this.regionService = regionService;
        this.distrService = distrService;
    }
    regionList(res) {
        const regions = this.regionService.getAllRegion();
        regions
            .then((data) => {
            if (data.length > 0) {
                res.status(200).json({ success: true, data: data });
            }
            else {
                res.status(400).send({ success: false, data: [] });
            }
        })
            .catch((error) => {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        });
    }
    distrList(res) {
        const regions = this.distrService.getAllDistricts();
        regions
            .then((data) => {
            if (data.length > 0) {
                res.status(200).json({ success: true, data: data });
            }
            else {
                res.status(400).send({ success: false, data: [] });
            }
        })
            .catch((error) => {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        });
    }
    addregion(regionDto, res) {
        this.regionService
            .insertRegion(regionDto)
            .then((data) => {
            res
                .status(common_1.HttpStatus.CREATED)
                .send({ success: true, message: 'created success!!!', data: data });
        })
            .catch((error) => {
            res
                .status(common_1.HttpStatus.FORBIDDEN)
                .send({ success: false, message: error });
        });
    }
    fillDataregion() {
        return this.regionService.fillDataRegion();
    }
    getRegionByDistrict(res, id) {
        return this.distrService.getSelectDistrict(id).then((data) => {
            if (data.length > 0) {
                res.status(200).send({ success: true, data: data, message: 'Fetch All Records!!!' });
            }
            else {
                res.status(400).send({ success: false, data: null, message: "Not found Records!!!" });
            }
        }).catch((error) => {
            res.status(401).send({ success: false, message: error.message });
        });
    }
};
__decorate([
    (0, common_1.Get)('/regionlist'),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "regionList", null);
__decorate([
    (0, common_1.Get)('/distrlist'),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "distrList", null);
__decorate([
    (0, common_1.Post)('addregion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [region_dto_1.RegionDto, Object]),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "addregion", null);
__decorate([
    (0, common_1.Get)('/filldateregion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "fillDataregion", null);
__decorate([
    (0, common_1.Get)('/selectdistrict/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('redion_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "getRegionByDistrict", null);
RegionsController = __decorate([
    (0, swagger_1.ApiTags)('Regions'),
    (0, common_1.Controller)('regions'),
    __metadata("design:paramtypes", [regions_service_1.RegionsService,
        districts_service_1.DistrictsService])
], RegionsController);
exports.RegionsController = RegionsController;
//# sourceMappingURL=regions.controller.js.map