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
exports.Reserva = void 0;
const typeorm_1 = require("typeorm");
const salida_entity_1 = require("../../salidas/entities/salida.entity");
const turista_entity_1 = require("../../turistas/entities/turista.entity");
let Reserva = class Reserva {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reserva.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unique: true
    }),
    __metadata("design:type", Number)
], Reserva.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: false,
        default: 1
    }),
    __metadata("design:type", Number)
], Reserva.prototype, "lugaresReservados", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: false
    }),
    __metadata("design:type", Boolean)
], Reserva.prototype, "usada", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => salida_entity_1.Salida, (salida) => salida.reservas, { nullable: false }),
    __metadata("design:type", salida_entity_1.Salida)
], Reserva.prototype, "salida", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => turista_entity_1.Turista, (turista) => turista.reservas, { nullable: false }),
    __metadata("design:type", turista_entity_1.Turista)
], Reserva.prototype, "turista", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Reserva.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Reserva.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Reserva.prototype, "deletedAt", void 0);
Reserva = __decorate([
    (0, typeorm_1.Entity)('reservas')
], Reserva);
exports.Reserva = Reserva;
//# sourceMappingURL=reserva.entity.js.map