"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTuristaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_turista_dto_1 = require("./create-turista.dto");
class UpdateTuristaDto extends (0, mapped_types_1.PartialType)(create_turista_dto_1.CreateTuristaDto) {
}
exports.UpdateTuristaDto = UpdateTuristaDto;
//# sourceMappingURL=update-turista.dto.js.map