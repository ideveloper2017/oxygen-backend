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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const permissions_entity_1 = require("./permissions.entity");
const users_entity_1 = require("./users.entity");
let Roles = class Roles extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Roles.prototype, "role_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Roles.prototype, "role_title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Roles.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => users_entity_1.Users, users => users.roles),
    __metadata("design:type", users_entity_1.Users)
], Roles.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => permissions_entity_1.Permissions, (permission) => permission.roles),
    (0, typeorm_1.JoinTable)({ name: 'RoleHasPermission' }),
    __metadata("design:type", Array)
], Roles.prototype, "permission", void 0);
Roles = __decorate([
    (0, typeorm_1.Entity)('Roles')
], Roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.entity.js.map