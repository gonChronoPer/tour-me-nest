"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadesModule = void 0;
const common_1 = require("@nestjs/common");
const ciudades_service_1 = require("./ciudades.service");
const ciudades_controller_1 = require("./ciudades.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ciudad_entity_1 = require("./entities/ciudad.entity");
let CiudadesModule = class CiudadesModule {
};
CiudadesModule = __decorate([
    (0, common_1.Module)({
        controllers: [ciudades_controller_1.CiudadesController],
        providers: [ciudades_service_1.CiudadesService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ciudad_entity_1.Ciudad])
        ],
        exports: [
            ciudades_service_1.CiudadesService,
            typeorm_1.TypeOrmModule
        ]
    })
], CiudadesModule);
exports.CiudadesModule = CiudadesModule;
//# sourceMappingURL=ciudades.module.js.map