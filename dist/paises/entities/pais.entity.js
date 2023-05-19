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
exports.Pais = void 0;
const ciudad_entity_1 = require("../../ciudades/entities/ciudad.entity");
const typeorm_1 = require("typeorm");
let Pais = class Pais {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pais.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Pais.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Pais.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Pais.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Pais.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ciudad_entity_1.Ciudad, (paisCiudad) => paisCiudad.pais, { cascade: true }),
    __metadata("design:type", Array)
], Pais.prototype, "ciudades", void 0);
Pais = __decorate([
    (0, typeorm_1.Entity)({
        name: 'paises'
    })
], Pais);
exports.Pais = Pais;
//# sourceMappingURL=pais.entity.js.map