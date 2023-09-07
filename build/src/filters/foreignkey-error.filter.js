"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForeignKeyConstraintErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const QueryFailedError_1 = require("typeorm/error/QueryFailedError");
let ForeignKeyConstraintErrorFilter = class ForeignKeyConstraintErrorFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        if (exception.message.includes('foreign key constraint')) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Foreign key constraint violation',
                problem: exception.message
            });
        }
        else {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'An error occurred',
            });
        }
    }
};
ForeignKeyConstraintErrorFilter = __decorate([
    (0, common_1.Catch)(QueryFailedError_1.QueryFailedError)
], ForeignKeyConstraintErrorFilter);
exports.ForeignKeyConstraintErrorFilter = ForeignKeyConstraintErrorFilter;
//# sourceMappingURL=foreignkey-error.filter.js.map