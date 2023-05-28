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
exports.TuristasController = void 0;
const common_1 = require("@nestjs/common");
const turistas_service_1 = require("./turistas.service");
const create_turista_dto_1 = require("./dto/create-turista.dto");
const update_turista_dto_1 = require("./dto/update-turista.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let TuristasController = class TuristasController {
    constructor(turistasService) {
        this.turistasService = turistasService;
    }
    create(createTuristaDto) {
        return this.turistasService.create(createTuristaDto);
    }
    findAll(paginationDto) {
        return this.turistasService.findAll(paginationDto);
    }
    findOne(id) {
        return this.turistasService.findOne(id);
    }
    findOneByMail(mail) {
        return this.turistasService.findOneByMail(mail);
    }
    update(id, updateTuristaDto) {
        return this.turistasService.update(id, updateTuristaDto);
    }
    remove(id) {
        return this.turistasService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_turista_dto_1.CreateTuristaDto]),
    __metadata("design:returntype", void 0)
], TuristasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], TuristasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TuristasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/:mail'),
    __param(0, (0, common_1.Param)('mail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TuristasController.prototype, "findOneByMail", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_turista_dto_1.UpdateTuristaDto]),
    __metadata("design:returntype", void 0)
], TuristasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TuristasController.prototype, "remove", null);
TuristasController = __decorate([
    (0, common_1.Controller)('turistas'),
    __metadata("design:paramtypes", [turistas_service_1.TuristasService])
], TuristasController);
exports.TuristasController = TuristasController;
//# sourceMappingURL=turistas.controller.js.map