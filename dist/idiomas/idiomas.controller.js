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
exports.IdiomasController = void 0;
const common_1 = require("@nestjs/common");
const idiomas_service_1 = require("./idiomas.service");
const create_idioma_dto_1 = require("./dto/create-idioma.dto");
const update_idioma_dto_1 = require("./dto/update-idioma.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let IdiomasController = class IdiomasController {
    constructor(idiomasService) {
        this.idiomasService = idiomasService;
    }
    create(createIdiomaDto) {
        return this.idiomasService.create(createIdiomaDto);
    }
    findAll(paginationDto) {
        return this.idiomasService.findAll(paginationDto);
    }
    findOne(id) {
        return this.idiomasService.findOne(id);
    }
    update(id, updateIdiomaDto) {
        return this.idiomasService.update(id, updateIdiomaDto);
    }
    remove(id) {
        return this.idiomasService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_idioma_dto_1.CreateIdiomaDto]),
    __metadata("design:returntype", void 0)
], IdiomasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], IdiomasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IdiomasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_idioma_dto_1.UpdateIdiomaDto]),
    __metadata("design:returntype", void 0)
], IdiomasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IdiomasController.prototype, "remove", null);
IdiomasController = __decorate([
    (0, common_1.Controller)('idiomas'),
    __metadata("design:paramtypes", [idiomas_service_1.IdiomasService])
], IdiomasController);
exports.IdiomasController = IdiomasController;
//# sourceMappingURL=idiomas.controller.js.map