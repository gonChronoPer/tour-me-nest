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
exports.Ciudad = void 0;
const pais_entity_1 = require("../../paises/entities/pais.entity");
const tour_entity_1 = require("../../tours/entities/tour.entity");
const typeorm_1 = require("typeorm");
let Ciudad = class Ciudad {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ciudad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Ciudad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pais_entity_1.Pais, (pais) => pais.ciudades, { onDelete: 'CASCADE',
        nullable: false }),
    __metadata("design:type", pais_entity_1.Pais)
], Ciudad.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tour_entity_1.Tour, (ciudadTours) => ciudadTours.ciudad, { cascade: true }),
    __metadata("design:type", Array)
], Ciudad.prototype, "tours", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Ciudad.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Ciudad.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Ciudad.prototype, "deletedAt", void 0);
Ciudad = __decorate([
    (0, typeorm_1.Entity)({
        name: 'ciudades'
    })
], Ciudad);
exports.Ciudad = Ciudad;
//# sourceMappingURL=ciudad.entity.js.map