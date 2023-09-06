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
exports.UserRoles = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const users_entity_1 = require("./users.entity");
const roles_entity_1 = require("./roles.entity");
let UserRoles = class UserRoles extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.ManyToOne)((type) => users_entity_1.Users),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", users_entity_1.Users)
], UserRoles.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => roles_entity_1.Roles),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", Array)
], UserRoles.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserRoles.prototype, "is_active", void 0);
UserRoles = __decorate([
    (0, typeorm_1.Entity)('UserRoles')
], UserRoles);
exports.UserRoles = UserRoles;
//# sourceMappingURL=user-roles.entity.js.map