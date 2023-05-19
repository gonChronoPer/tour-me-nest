"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCiudadeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ciudad_dto_1 = require("./create-ciudad.dto");
class UpdateCiudadeDto extends (0, mapped_types_1.PartialType)(create_ciudad_dto_1.CreateCiudadeDto) {
}
exports.UpdateCiudadeDto = UpdateCiudadeDto;
//# sourceMappingURL=update-ciudad.dto.js.map