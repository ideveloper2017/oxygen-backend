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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const roles_entity_1 = require("../entity/roles.entity");
const permissions_entity_1 = require("../entity/permissions.entity");
let RolesService = class RolesService {
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
        this.filldata = async () => {
            const permissions = await this.roleRepo.manager
                .getRepository(permissions_entity_1.Permissions)
                .find();
            let roles;
            if (this.roleRepo.exist()) {
                roles = await this.roleRepo.save([
                    {
                        id: 1,
                        role_name: 'SuperAdmin',
                        role_title: 'Cупер админ',
                        is_active: true,
                        permission: permissions,
                    },
                    {
                        id: 2,
                        role_name: 'admin',
                        role_title: 'Администратор',
                        is_active: true,
                        permission: permissions,
                    },
                    {
                        id: 3,
                        role_name: 'Seller',
                        role_title: 'Продавец',
                        is_active: true,
                        permission: permissions,
                    },
                    {
                        id: 4,
                        role_name: 'Operator',
                        role_title: 'Опетарор',
                        is_active: true,
                        permission: permissions,
                    },
                    {
                        id: 5,
                        role_name: 'Caisher',
                        role_title: 'Кассир',
                        is_active: true,
                        permission: permissions,
                    },
                    {
                        id: 6,
                        role_name: 'Account',
                        role_title: 'Бухгалтер',
                        is_active: true,
                        permission: permissions,
                    },
                ]);
            }
            return roles;
        };
    }
    async getRoleList() {
        return await this.roleRepo.find({ relations: ['permissions'] });
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(roles_entity_1.Roles)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map