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
exports.CreateClientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateClientDto {
    constructor() {
        this.gender = 'male' || 'female';
        this.type = 'jismoniy' || 'yuridik';
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Jhonson', description: 'clients firstname ' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'McCandy', description: 'clients lastname ' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sardor ugli', description: 'clients middlename' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "middle_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'male', description: 'gender of client' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'jismoniy', description: 'type of client' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Orlando Mallway street A4',
        description: 'clients address ',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+998 90 112 2442',
        description: 'clients contact number ',
    }),
    (0, swagger_1.ApiProperty)({ example: '+998 90 112 2442', description: 'mijoz tel raqami' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "contact_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1978-08-13' }),
    __metadata("design:type", Date)
], CreateClientDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'AD4586321' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "passport_seria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Namangan IIV' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "given_from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1996-09-23' }),
    __metadata("design:type", Date)
], CreateClientDto.prototype, "given_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2006-08-13' }),
    __metadata("design:type", Date)
], CreateClientDto.prototype, "untill_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Namangan viloyati Oxunboboyev' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "legal_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ro'yxatga olingan manzili" }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "registered_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'izoh' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "description", void 0);
exports.CreateClientDto = CreateClientDto;
//# sourceMappingURL=create-client.dto.js.map