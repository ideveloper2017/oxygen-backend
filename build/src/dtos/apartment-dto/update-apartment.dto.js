"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApartmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_apartment_dto_1 = require("./create-apartment.dto");
class UpdateApartmentDto extends (0, swagger_1.PartialType)(create_apartment_dto_1.CreateApartmentDto) {
}
exports.UpdateApartmentDto = UpdateApartmentDto;
//# sourceMappingURL=update-apartment.dto.js.map