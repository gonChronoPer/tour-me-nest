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
exports.Tour = void 0;
const ciudad_entity_1 = require("../../ciudades/entities/ciudad.entity");
const salida_entity_1 = require("../../salidas/entities/salida.entity");
const typeorm_1 = require("typeorm");
let Tour = class Tour {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tour.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        unique: true,
        nullable: false
    }),
    __metadata("design:type", String)
], Tour.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true
    }),
    __metadata("design:type", String)
], Tour.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false
    }),
    __metadata("design:type", String)
], Tour.prototype, "puntoEncuentro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'float',
        default: 0,
        nullable: false
    }),
    __metadata("design:type", Number)
], Tour.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Tour.prototype, "portadaPath", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ciudad_entity_1.Ciudad, (ciudad) => ciudad.tours, { nullable: false }),
    __metadata("design:type", ciudad_entity_1.Ciudad)
], Tour.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => salida_entity_1.Salida, (tourSalidas) => tourSalidas.tour, { cascade: true }),
    __metadata("design:type", Array)
], Tour.prototype, "salidas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tour.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Tour.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Tour.prototype, "deletedAt", void 0);
Tour = __decorate([
    (0, typeorm_1.Entity)('tours')
], Tour);
exports.Tour = Tour;
//# sourceMappingURL=tour.entity.js.map