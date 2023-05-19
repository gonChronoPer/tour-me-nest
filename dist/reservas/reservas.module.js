"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasModule = void 0;
const common_1 = require("@nestjs/common");
const reservas_service_1 = require("./reservas.service");
const reservas_controller_1 = require("./reservas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const reserva_entity_1 = require("./entities/reserva.entity");
const salida_entity_1 = require("../salidas/entities/salida.entity");
const turista_entity_1 = require("../turistas/entities/turista.entity");
let ReservasModule = class ReservasModule {
};
ReservasModule = __decorate([
    (0, common_1.Module)({
        controllers: [reservas_controller_1.ReservasController],
        providers: [reservas_service_1.ReservasService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([reserva_entity_1.Reserva, salida_entity_1.Salida, turista_entity_1.Turista])
        ],
        exports: [
            reservas_service_1.ReservasService,
            typeorm_1.TypeOrmModule
        ]
    })
], ReservasModule);
exports.ReservasModule = ReservasModule;
//# sourceMappingURL=reservas.module.js.map