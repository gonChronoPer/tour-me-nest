"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGuiaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_guia_dto_1 = require("./create-guia.dto");
class UpdateGuiaDto extends (0, mapped_types_1.PartialType)(create_guia_dto_1.CreateGuiaDto) {
}
exports.UpdateGuiaDto = UpdateGuiaDto;
//# sourceMappingURL=update-guia.dto.js.map