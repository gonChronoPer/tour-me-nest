"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const ciudades_module_1 = require("./ciudades/ciudades.module");
const idiomas_module_1 = require("./idiomas/idiomas.module");
const tours_module_1 = require("./tours/tours.module");
const reservas_module_1 = require("./reservas/reservas.module");
const guias_module_1 = require("./guias/guias.module");
const turistas_module_1 = require("./turistas/turistas.module");
const auth_module_1 = require("./auth/auth.module");
const salidas_module_1 = require("./salidas/salidas.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                autoLoadEntities: true,
                synchronize: true,
            }),
            ciudades_module_1.CiudadesModule,
            idiomas_module_1.IdiomasModule,
            tours_module_1.ToursModule,
            reservas_module_1.ReservasModule,
            guias_module_1.GuiasModule,
            turistas_module_1.TuristasModule,
            auth_module_1.AuthModule,
            salidas_module_1.SalidasModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map