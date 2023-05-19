"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalidasModule = void 0;
const common_1 = require("@nestjs/common");
const salidas_service_1 = require("./salidas.service");
const salidas_controller_1 = require("./salidas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const salida_entity_1 = require("./entities/salida.entity");
const guia_entity_1 = require("../guias/entities/guia.entity");
const tour_entity_1 = require("../tours/entities/tour.entity");
const idioma_entity_1 = require("../idiomas/entities/idioma.entity");
let SalidasModule = class SalidasModule {
};
SalidasModule = __decorate([
    (0, common_1.Module)({
        controllers: [salidas_controller_1.SalidasController],
        providers: [salidas_service_1.SalidasService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([salida_entity_1.Salida, guia_entity_1.Guia, tour_entity_1.Tour, idioma_entity_1.Idioma])
        ],
        exports: [
            salidas_service_1.SalidasService,
            typeorm_1.TypeOrmModule
        ]
    })
], SalidasModule);
exports.SalidasModule = SalidasModule;
//# sourceMappingURL=salidas.module.js.map