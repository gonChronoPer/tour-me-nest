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
exports.ToursController = void 0;
const common_1 = require("@nestjs/common");
const tours_service_1 = require("./tours.service");
const create_tour_dto_1 = require("./dto/create-tour.dto");
const update_tour_dto_1 = require("./dto/update-tour.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let ToursController = class ToursController {
    constructor(toursService) {
        this.toursService = toursService;
    }
    create(createTourDto) {
        return this.toursService.create(createTourDto);
    }
    findAll(paginationDto) {
        return this.toursService.findAll(paginationDto);
    }
    findAllByGuia(id) {
        return this.toursService.findAllByCiudad(id);
    }
    findOne(id) {
        return this.toursService.findOne(id);
    }
    update(id, updateTourDto) {
        return this.toursService.update(id, updateTourDto);
    }
    remove(id) {
        return this.toursService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tour_dto_1.CreateTourDto]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/ciudad/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "findAllByGuia", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tour_dto_1.UpdateTourDto]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "remove", null);
ToursController = __decorate([
    (0, common_1.Controller)('tours'),
    __metadata("design:paramtypes", [tours_service_1.ToursService])
], ToursController);
exports.ToursController = ToursController;
//# sourceMappingURL=tours.controller.js.map