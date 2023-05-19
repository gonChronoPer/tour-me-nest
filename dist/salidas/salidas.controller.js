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
exports.SalidasController = void 0;
const common_1 = require("@nestjs/common");
const salidas_service_1 = require("./salidas.service");
const create_salida_dto_1 = require("./dto/create-salida.dto");
const update_salida_dto_1 = require("./dto/update-salida.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let SalidasController = class SalidasController {
    constructor(salidasService) {
        this.salidasService = salidasService;
    }
    create(createSalidaDto) {
        return this.salidasService.create(createSalidaDto);
    }
    findAll(paginationDto) {
        return this.salidasService.findAll(paginationDto);
    }
    findAllByGuia(id) {
        return this.salidasService.findAllByGuia(id);
    }
    findOne(id) {
        return this.salidasService.findOne(id);
    }
    update(id, updateSalidaDto) {
        return this.salidasService.update(id, updateSalidaDto);
    }
    remove(id) {
        return this.salidasService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_salida_dto_1.CreateSalidaDto]),
    __metadata("design:returntype", void 0)
], SalidasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], SalidasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/guia/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalidasController.prototype, "findAllByGuia", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalidasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_salida_dto_1.UpdateSalidaDto]),
    __metadata("design:returntype", void 0)
], SalidasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalidasController.prototype, "remove", null);
SalidasController = __decorate([
    (0, common_1.Controller)('salidas'),
    __metadata("design:paramtypes", [salidas_service_1.SalidasService])
], SalidasController);
exports.SalidasController = SalidasController;
//# sourceMappingURL=salidas.controller.js.map