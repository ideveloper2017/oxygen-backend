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
exports.ApartmentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const create_apartment_dto_1 = require("../dtos/apartment-dto/create-apartment.dto");
const update_apartment_dto_1 = require("../dtos/apartment-dto/update-apartment.dto");
const apartments_service_1 = require("../service/apartments.service");
let ApartmentsController = class ApartmentsController {
    constructor(apartmentsService) {
        this.apartmentsService = apartmentsService;
    }
    createApartment(floor_id, createApartmentDto) {
        return this.apartmentsService.addOneApartment(floor_id, createApartmentDto);
    }
    updateApartment(id, updateApartmentDto) {
        return this.apartmentsService.updateApartment(id, updateApartmentDto).then(data => {
            if (data.affected == 0) {
                return { success: false, message: 'Kvartira topilmadi' };
            }
            return { success: true, message: 'Kvartira tahrirlandi' };
        }).catch(error => console.log(error));
    }
    deleteApartment(id) {
        return this.apartmentsService.deleteApartment(id).then(data => {
            if (data.affected != 0) {
                return { success: true, message: "Apartment deleted" };
            }
            else {
                return { success: false, message: "error while deleting" };
            }
        }).catch(error => console.log(error));
    }
    getApartments(floor_id, res) {
        return this.apartmentsService.getApartments(floor_id)
            .then((data) => {
            if (data.length != 0) {
                return { success: true, data, message: "Fetched data" };
            }
            else {
                return { success: false, message: "Not found record" };
            }
        }).catch(error => console.log(error));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Binoga xonadon qo'shish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Kvartira muvaffaqiyatli qo'shildi!",
    }),
    (0, common_1.Post)('/new/:floor_id'),
    __param(0, (0, common_1.Param)('floor_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_apartment_dto_1.CreateApartmentDto]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "createApartment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Kvartira tahrirlash' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kvartira tahrirlandi' }),
    (0, common_1.Patch)('/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_apartment_dto_1.UpdateApartmentDto]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "updateApartment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Kvartirani ro'yxatdan o'chirish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kvartira o'chilidi" }),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "deleteApartment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bitta binodagi barcha kvartiralar" }),
    (0, common_1.Get)('/get/:floor_id'),
    __param(0, (0, common_1.Param)('floor_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "getApartments", null);
ApartmentsController = __decorate([
    (0, swagger_1.ApiTags)('Apartments'),
    (0, common_1.Controller)('apartments'),
    __metadata("design:paramtypes", [apartments_service_1.ApartmentsService])
], ApartmentsController);
exports.ApartmentsController = ApartmentsController;
//# sourceMappingURL=apartments.controller.js.map