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
exports.GuiasController = void 0;
const common_1 = require("@nestjs/common");
const guias_service_1 = require("./guias.service");
const create_guia_dto_1 = require("./dto/create-guia.dto");
const update_guia_dto_1 = require("./dto/update-guia.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let GuiasController = class GuiasController {
    constructor(guiasService) {
        this.guiasService = guiasService;
    }
    create(createGuiaDto) {
        return this.guiasService.create(createGuiaDto);
    }
    findAll(paginationDto) {
        return this.guiasService.findAll(paginationDto);
    }
    findOne(id) {
        return this.guiasService.findOne(id);
    }
    update(id, updateGuiaDto) {
        return this.guiasService.update(id, updateGuiaDto);
    }
    remove(id) {
        return this.guiasService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guia_dto_1.CreateGuiaDto]),
    __metadata("design:returntype", void 0)
], GuiasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], GuiasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GuiasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_guia_dto_1.UpdateGuiaDto]),
    __metadata("design:returntype", void 0)
], GuiasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GuiasController.prototype, "remove", null);
GuiasController = __decorate([
    (0, common_1.Controller)('guias'),
    __metadata("design:paramtypes", [guias_service_1.GuiasService])
], GuiasController);
exports.GuiasController = GuiasController;
//# sourceMappingURL=guias.controller.js.map