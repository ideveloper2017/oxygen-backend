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
exports.FloorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const floors_service_1 = require("../service/floors.service");
let FloorsController = class FloorsController {
    constructor(floorService) {
        this.floorService = floorService;
    }
    addFloor(entrance_id) {
        return this.floorService.addFloor(entrance_id).then(data => {
            if (data) {
                return { success: true, message: "Qavat qo'shildi", data };
            }
            else {
                return { success: false, message: "xatolik!!" };
            }
        }).catch(error => {
            console.log(error);
        });
    }
    getFloorsOfEntrance(entrance_id) {
        return this.floorService.getFloorOfEntrance(entrance_id);
    }
    deleteEmptyEntrances(id) {
        return this.floorService.deleteFloor(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Blokga qavat qo'shish" }),
    (0, common_1.Post)('/:entrance_id'),
    __param(0, (0, common_1.Param)('entrance_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FloorsController.prototype, "addFloor", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Podyezdga tegishli barcha qavatlarni ko'rish" }),
    (0, common_1.Get)('/all/:entrance_id'),
    __param(0, (0, common_1.Param)('entrance_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FloorsController.prototype, "getFloorsOfEntrance", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "bo'sh podyezni o'chirish" }),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FloorsController.prototype, "deleteEmptyEntrances", null);
FloorsController = __decorate([
    (0, swagger_1.ApiTags)('Floors'),
    (0, common_1.Controller)('floors'),
    __metadata("design:paramtypes", [floors_service_1.FloorsService])
], FloorsController);
exports.FloorsController = FloorsController;
//# sourceMappingURL=floors.controller.js.map