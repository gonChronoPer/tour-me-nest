"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomasModule = void 0;
const common_1 = require("@nestjs/common");
const idiomas_service_1 = require("./idiomas.service");
const idiomas_controller_1 = require("./idiomas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const idioma_entity_1 = require("./entities/idioma.entity");
let IdiomasModule = class IdiomasModule {
};
IdiomasModule = __decorate([
    (0, common_1.Module)({
        controllers: [idiomas_controller_1.IdiomasController],
        providers: [idiomas_service_1.IdiomasService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([idioma_entity_1.Idioma])
        ],
        exports: [
            idiomas_service_1.IdiomasService,
            typeorm_1.TypeOrmModule
        ]
    })
], IdiomasModule);
exports.IdiomasModule = IdiomasModule;
//# sourceMappingURL=idiomas.module.js.map