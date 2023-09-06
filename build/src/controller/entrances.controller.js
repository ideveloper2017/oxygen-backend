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
exports.EntrancesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const entrances_service_1 = require("../service/entrances.service");
let EntrancesController = class EntrancesController {
    constructor(entranceService) {
        this.entranceService = entranceService;
    }
    addEntrance(building_id) {
        return this.entranceService
            .addEntrance(building_id)
            .then((response) => {
            if (response) {
                return { success: true, data: response, message: "Blok qo'shildi." };
            }
            else {
                return { success: false, message: "Blok qo'shilmadi." };
            }
        })
            .catch((error) => {
            console.log(error.massage);
        });
    }
    getEntranceOfBuilding(building_id) {
        return this.entranceService.getEntranceOfBuilding(building_id);
    }
    deleteEmptyEntrances(id) {
        return this.entranceService.deleteEmptyEnrances(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi Yo'lak qo'shish" }),
    (0, common_1.Post)('/:building_id'),
    __param(0, (0, common_1.Param)('building_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntrancesController.prototype, "addEntrance", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Binoga tegishli barcha podyezdlarni ko'rish" }),
    (0, common_1.Get)('/all/:building_id'),
    __param(0, (0, common_1.Param)('building_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntrancesController.prototype, "getEntranceOfBuilding", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "bo'sh podyezni o'chirish" }),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntrancesController.prototype, "deleteEmptyEntrances", null);
EntrancesController = __decorate([
    (0, swagger_1.ApiTags)('Entrances'),
    (0, common_1.Controller)('entrances'),
    __metadata("design:paramtypes", [entrances_service_1.EntrancesService])
], EntrancesController);
exports.EntrancesController = EntrancesController;
//# sourceMappingURL=entrances.controller.js.map