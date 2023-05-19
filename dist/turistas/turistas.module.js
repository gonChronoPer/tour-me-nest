"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuristasModule = void 0;
const common_1 = require("@nestjs/common");
const turistas_service_1 = require("./turistas.service");
const turistas_controller_1 = require("./turistas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const turista_entity_1 = require("./entities/turista.entity");
let TuristasModule = class TuristasModule {
};
TuristasModule = __decorate([
    (0, common_1.Module)({
        controllers: [turistas_controller_1.TuristasController],
        providers: [turistas_service_1.TuristasService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([turista_entity_1.Turista])
        ],
        exports: [
            turistas_service_1.TuristasService,
            typeorm_1.TypeOrmModule
        ]
    })
], TuristasModule);
exports.TuristasModule = TuristasModule;
//# sourceMappingURL=turistas.module.js.map