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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ciudad_entity_1 = require("./entities/ciudad.entity");
const typeorm_2 = require("typeorm");
const pais_entity_1 = require("../paises/entities/pais.entity");
let CiudadesService = class CiudadesService {
    constructor(ciudadRepository, paisRepository) {
        this.ciudadRepository = ciudadRepository;
        this.paisRepository = paisRepository;
        this.logger = new common_1.Logger('CiudadesService');
    }
    async create(createCiudadeDto) {
        try {
            const { paisId } = createCiudadeDto, ciudadDetails = __rest(createCiudadeDto, ["paisId"]);
            const paisCiudad = await this.paisRepository.findOneBy({ id: paisId });
            if (!paisCiudad)
                throw new common_1.BadRequestException(`No existe ningun pais con el id ${paisId}`);
            const ciudad = this.ciudadRepository.create(Object.assign(Object.assign({}, ciudadDetails), { pais: paisCiudad }));
            await this.ciudadRepository.save(ciudad);
            return ciudad;
        }
        catch (error) {
            if (error.status === 400)
                throw new common_1.BadRequestException(error.message);
            this.handleDBExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const ciudades = await this.ciudadRepository.find({
            take: limit,
            skip: offset,
            relations: {
                pais: true
            }
        });
        return ciudades;
    }
    async findOne(id) {
        const ciudad = await this.ciudadRepository.findOne({
            where: { id: id },
            relations: ['pais']
        });
        if (!ciudad)
            throw new common_1.NotFoundException(`Ciudad con id ${id} no encontrada`);
        return ciudad;
    }
    async update(id, updateCiudadeDto) {
        const { paisId } = updateCiudadeDto, ciudadDetails = __rest(updateCiudadeDto, ["paisId"]);
        const ciudad = await this.findOne(id);
        const paisCiudad = await this.paisRepository.findOneBy({ id: paisId });
        if (!paisCiudad)
            throw new common_1.BadRequestException(`No existe ningun pais con el id ${paisId}`);
        const dataModificada = Object.assign(Object.assign({}, ciudadDetails), { pais: paisCiudad });
        await this.ciudadRepository.update(id = id, dataModificada);
        return await this.findOne(id);
    }
    async remove(id) {
        const ciudad = await this.findOne(id);
        await this.ciudadRepository.remove(ciudad);
        if (ciudad)
            return {
                msg: `La ciudad con el id ${id} se ha eliminado correctamente.`
            };
    }
    handleDBExceptions(error) {
        if (error.sqlState === '23000')
            throw new common_1.BadRequestException(error.sqlMessage);
        this.logger.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
CiudadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ciudad_entity_1.Ciudad)),
    __param(1, (0, typeorm_1.InjectRepository)(pais_entity_1.Pais)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CiudadesService);
exports.CiudadesService = CiudadesService;
//# sourceMappingURL=ciudades.service.js.map