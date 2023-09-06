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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBuildingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBuildingDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Nest One buidings-1',
        description: 'bino nomi kiritiladi.',
    }),
    __metadata("design:type", String)
], CreateBuildingDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'binodagi podyezdlar soni kiritiladi.',
    }),
    __metadata("design:type", Number)
], CreateBuildingDto.prototype, "entrance_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'bino qavatlari soni kiritiladi.' }),
    __metadata("design:type", Number)
], CreateBuildingDto.prototype, "floor_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 4,
        description: 'qavatlardagi xonadonlar soni kiritiladi.',
    }),
    __metadata("design:type", Number)
], CreateBuildingDto.prototype, "apartment_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'turar joy majmuasi id kiritiladi.' }),
    __metadata("design:type", Number)
], CreateBuildingDto.prototype, "town_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 7500000,
        description: 'kvadrat metr narxi kiritiladi.',
    }),
    __metadata("design:type", Number)
], CreateBuildingDto.prototype, "mk_price", void 0);
exports.CreateBuildingDto = CreateBuildingDto;
//# sourceMappingURL=create-building.dto.js.map