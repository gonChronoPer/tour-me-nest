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
exports.ReservasController = void 0;
const common_1 = require("@nestjs/common");
const reservas_service_1 = require("./reservas.service");
const create_reserva_dto_1 = require("./dto/create-reserva.dto");
const update_reserva_dto_1 = require("./dto/update-reserva.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let ReservasController = class ReservasController {
    constructor(reservasService) {
        this.reservasService = reservasService;
    }
    create(createReservaDto) {
        return this.reservasService.create(createReservaDto);
    }
    findAll(paginationDto) {
        return this.reservasService.findAll(paginationDto);
    }
    findAllByTurista(id) {
        return this.reservasService.findAllByTurista(id);
    }
    findOne(id) {
        return this.reservasService.findOne(id);
    }
    update(id, updateReservaDto) {
        return this.reservasService.update(id, updateReservaDto);
    }
    checkin(codigo) {
        return this.reservasService.checkin(codigo);
    }
    remove(id) {
        return this.reservasService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reserva_dto_1.CreateReservaDto]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/turista/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "findAllByTurista", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reserva_dto_1.UpdateReservaDto]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('checkin/:id'),
    __param(0, (0, common_1.Param)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "checkin", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "remove", null);
ReservasController = __decorate([
    (0, common_1.Controller)('reservas'),
    __metadata("design:paramtypes", [reservas_service_1.ReservasService])
], ReservasController);
exports.ReservasController = ReservasController;
//# sourceMappingURL=reservas.controller.js.map