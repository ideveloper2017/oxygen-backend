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
exports.CreateTownDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTownDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Oxygen', description: 'turar joy nomi' }),
    __metadata("design:type", String)
], CreateTownDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'joylashgan viloyati' }),
    __metadata("design:type", Number)
], CreateTownDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'joylashgan tumani' }),
    __metadata("design:type", Number)
], CreateTownDto.prototype, "district_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Afsona 43', description: 'manzili' }),
    __metadata("design:type", String)
], CreateTownDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: '+998 90 222 1122' }),
    __metadata("design:type", String)
], CreateTownDto.prototype, "contact_number", void 0);
exports.CreateTownDto = CreateTownDto;
//# sourceMappingURL=create-town.dto.js.map