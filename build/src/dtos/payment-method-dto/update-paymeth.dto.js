"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditPaymentMethodDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_paymeth_dto_1 = require("./create-paymeth.dto");
class EditPaymentMethodDto extends (0, swagger_1.PartialType)(create_paymeth_dto_1.CreatePaymentMethodDto) {
}
exports.EditPaymentMethodDto = EditPaymentMethodDto;
//# sourceMappingURL=update-paymeth.dto.js.map