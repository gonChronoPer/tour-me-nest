"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuiasModule = void 0;
const common_1 = require("@nestjs/common");
const guias_service_1 = require("./guias.service");
const guias_controller_1 = require("./guias.controller");
const typeorm_1 = require("@nestjs/typeorm");
const guia_entity_1 = require("./entities/guia.entity");
let GuiasModule = class GuiasModule {
};
GuiasModule = __decorate([
    (0, common_1.Module)({
        controllers: [guias_controller_1.GuiasController],
        providers: [guias_service_1.GuiasService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([guia_entity_1.Guia])
        ],
        exports: [
            guias_service_1.GuiasService,
            typeorm_1.TypeOrmModule
        ]
    })
], GuiasModule);
exports.GuiasModule = GuiasModule;
//# sourceMappingURL=guias.module.js.map