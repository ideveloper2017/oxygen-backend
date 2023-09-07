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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const permissions_entity_1 = require("../entity/permissions.entity");
const typeorm_2 = require("@nestjs/typeorm");
let PermissionsService = class PermissionsService {
    constructor(permissionRepo) {
        this.permissionRepo = permissionRepo;
        this.getPermission = async () => {
            return await this.permissionRepo.find({ relations: ['roles'] });
        };
        this.filldata = async () => {
            if (this.permissionRepo.exist()) {
                return await this.permissionRepo
                    .save([
                    { id: 1, name: 'user.create' },
                    { id: 2, name: 'user.view' },
                    { id: 3, name: 'user.update' },
                    { id: 4, name: 'user.save' },
                    { id: 5, name: 'user.edit' },
                    { id: 6, name: 'user.delete' },
                    { id: 7, name: 'role.create' },
                    { id: 8, name: 'role.save' },
                    { id: 9, name: 'role.view' },
                    { id: 10, name: 'role.update' },
                    { id: 11, name: 'role.edit' },
                    { id: 12, name: 'role.delete' },
                    { id: 13, name: 'permission.create' },
                    { id: 14, name: 'permission.save' },
                    { id: 15, name: 'permission.update' },
                    { id: 16, name: 'permission.view' },
                    { id: 17, name: 'permission.edit' },
                    { id: 18, name: 'permission.delete' },
                    { id: 19, name: 'region.create' },
                    { id: 20, name: 'region.save' },
                    { id: 21, name: 'region.view' },
                    { id: 22, name: 'region.update' },
                    { id: 23, name: 'region.edit' },
                    { id: 24, name: 'region.delete' },
                    { id: 25, name: 'district.create' },
                    { id: 26, name: 'district.save' },
                    { id: 27, name: 'district.view' },
                    { id: 28, name: 'district.update' },
                    { id: 29, name: 'district.edit' },
                    { id: 30, name: 'district.delete' },
                    { id: 31, name: 'address.create' },
                    { id: 32, name: 'address.save' },
                    { id: 33, name: 'address.view' },
                    { id: 34, name: 'address.edit' },
                    { id: 35, name: 'address.update' },
                    { id: 36, name: 'address.delete' },
                    { id: 37, name: 'client.create' },
                    { id: 38, name: 'client.save' },
                    { id: 39, name: 'client.view' },
                    { id: 40, name: 'client.update' },
                    { id: 41, name: 'client.edit' },
                    { id: 42, name: 'client.delete' },
                    { id: 43, name: 'clientgroup.create' },
                    { id: 44, name: 'clientgroup.save' },
                    { id: 45, name: 'clientgroup.view' },
                    { id: 46, name: 'clientgroup.update' },
                    { id: 47, name: 'clientgroup.edit' },
                    { id: 48, name: 'clientgroup.delete' },
                ])
                    .then((data) => { });
            }
        };
    }
};
PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(permissions_entity_1.Permissions)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PermissionsService);
exports.PermissionsService = PermissionsService;
//# sourceMappingURL=permissions.service.js.map