"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTownDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_town_dto_1 = require("./create-town.dto");
class UpdateTownDto extends (0, swagger_1.PartialType)(create_town_dto_1.CreateTownDto) {
}
exports.UpdateTownDto = UpdateTownDto;
//# sourceMappingURL=update-town.dto.js.map