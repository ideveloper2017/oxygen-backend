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
exports.TownController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_town_dto_1 = require("../dtos/town-dto/create-town.dto");
const update_town_dto_1 = require("../dtos/town-dto/update-town.dto");
const town_service_1 = require("../service/town.service");
let TownController = class TownController {
    constructor(townService) {
        this.townService = townService;
    }
    createTown(createTownDto) {
        return this.townService.createTown(createTownDto).then(data => {
        });
    }
    getAllTowns(res) {
        return this.townService.findAllTowns().then((data) => {
            if (data.length != 0) {
                return res.send({
                    success: true,
                    data: data,
                    message: 'Fetch All Records!',
                });
            }
            else {
                return res.send({
                    success: false,
                    message: 'No data found',
                });
            }
        }).catch(error => console.log(error));
    }
    updateTown(id, updateTownDto) {
        return this.townService.updateTown(id, updateTownDto).then(data => {
            if (data.affected == 0) {
                return { success: false, message: 'Turar-joy topilmadi!' };
            }
            return { success: true, message: 'Turar-joy tahrirlandi!' };
        }).catch(error => console.log(error));
    }
    deleteTown(id) {
        return this.townService.deleteTown(id).then(data => {
            if (data.affected == 0) {
                return { success: false, message: 'Turar-joy topilmadi! ' };
            }
            return { success: true, message: "Turar-joy o'chirildi!" };
        });
    }
    truncateDatabase() {
        return this.townService.clearDatabase().then(data => {
            if (data) {
                return { success: true, message: "Database tozalandi ✅" };
            }
            else {
                return { success: false, message: "Database tozalashda xatolik ❌" };
            }
        });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Yangi turar-joy yaratish',
        description: "ya'ni onyekt yaratish",
    }),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_town_dto_1.CreateTownDto]),
    __metadata("design:returntype", void 0)
], TownController.prototype, "createTown", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "mavjud turar-joylarni ro'yxatini olish" }),
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TownController.prototype, "getAllTowns", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Turar-joyni tahrirlash' }),
    (0, common_1.Patch)('/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_town_dto_1.UpdateTownDto]),
    __metadata("design:returntype", void 0)
], TownController.prototype, "updateTown", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Turar-joyni o'chirish" }),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TownController.prototype, "deleteTown", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: `EHTIYOT BO'LAMIZ ⛔⛔⛔ BU REQUEST BAZANI TOZALAB YUBORADI ` }),
    (0, common_1.Delete)('/clear-database'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TownController.prototype, "truncateDatabase", null);
TownController = __decorate([
    (0, swagger_1.ApiTags)('Towns'),
    (0, common_1.Controller)('town'),
    __metadata("design:paramtypes", [town_service_1.TownService])
], TownController);
exports.TownController = TownController;
//# sourceMappingURL=town.controller.js.map