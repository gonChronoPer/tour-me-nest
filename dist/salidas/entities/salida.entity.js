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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salida = void 0;
const guia_entity_1 = require("../../guias/entities/guia.entity");
const idioma_entity_1 = require("../../idiomas/entities/idioma.entity");
const reserva_entity_1 = require("../../reservas/entities/reserva.entity");
const tour_entity_1 = require("../../tours/entities/tour.entity");
const typeorm_1 = require("typeorm");
let Salida = class Salida {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Salida.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        nullable: false
    }),
    __metadata("design:type", Date)
], Salida.prototype, "fechaHora", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: 0,
        nullable: false
    }),
    __metadata("design:type", Number)
], Salida.prototype, "lugaresDisponibles", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: 0,
        nullable: false
    }),
    __metadata("design:type", Number)
], Salida.prototype, "lugaresReservados", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: 0,
        nullable: false
    }),
    __metadata("design:type", Number)
], Salida.prototype, "lugaresCheckInReady", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tour_entity_1.Tour, (tour) => tour.salidas, { nullable: false }),
    __metadata("design:type", tour_entity_1.Tour)
], Salida.prototype, "tour", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => guia_entity_1.Guia, (guia) => guia.salidas, { nullable: false }),
    __metadata("design:type", guia_entity_1.Guia)
], Salida.prototype, "guia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => idioma_entity_1.Idioma, (idioma) => idioma.salidas, { nullable: false }),
    __metadata("design:type", idioma_entity_1.Idioma)
], Salida.prototype, "idioma", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reserva_entity_1.Reserva, (salidaReservas) => salidaReservas.salida, { cascade: true }),
    __metadata("design:type", Array)
], Salida.prototype, "reservas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Salida.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Salida.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Salida.prototype, "deletedAt", void 0);
Salida = __decorate([
    (0, typeorm_1.Entity)('salidas')
], Salida);
exports.Salida = Salida;
//# sourceMappingURL=salida.entity.js.map