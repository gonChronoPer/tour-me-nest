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
exports.SalidasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const salida_entity_1 = require("./entities/salida.entity");
const typeorm_2 = require("typeorm");
const tour_entity_1 = require("../tours/entities/tour.entity");
const guia_entity_1 = require("../guias/entities/guia.entity");
const idioma_entity_1 = require("../idiomas/entities/idioma.entity");
let SalidasService = class SalidasService {
    constructor(salidaRepository, tourRepository, guiaRepository, idiomaRepository) {
        this.salidaRepository = salidaRepository;
        this.tourRepository = tourRepository;
        this.guiaRepository = guiaRepository;
        this.idiomaRepository = idiomaRepository;
        this.logger = new common_1.Logger('SalidasService');
    }
    async create(createSalidaDto) {
        try {
            const { tourId, guiaId, idiomaId } = createSalidaDto, salidaDetails = __rest(createSalidaDto, ["tourId", "guiaId", "idiomaId"]);
            const tourSalida = await this.tourRepository.findOneBy({ id: tourId });
            if (!tourSalida)
                throw new common_1.BadRequestException(`No existe ningun tour con el id ${tourId}`);
            const guiaSalida = await this.guiaRepository.findOneBy({ id: guiaId });
            if (!guiaSalida)
                throw new common_1.BadRequestException(`No existe ningun guia con el id ${guiaId}`);
            const idiomaSalida = await this.idiomaRepository.findOneBy({ id: idiomaId });
            if (!idiomaSalida)
                throw new common_1.BadRequestException(`No existe ningun idioma con el id ${idiomaId}`);
            const salida = this.salidaRepository.create(Object.assign(Object.assign({}, salidaDetails), { tour: tourSalida, guia: guiaSalida, idioma: idiomaSalida }));
            await this.salidaRepository.save(salida);
            return salida;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const salidas = await this.salidaRepository.find({
            take: limit,
            skip: offset,
            relations: {
                tour: {
                    ciudad: true
                },
                guia: true,
                idioma: true
            }
        });
        return salidas;
    }
    async findAllByGuia(id) {
        const salidas = await this.salidaRepository.find({
            where: { guia: { id: id } },
            relations: [
                'tour',
                'tour.ciudad',
                'guia',
                'idioma'
            ]
        });
        if (!salidas || salidas.length === 0)
            throw new common_1.NotFoundException(`No se encontraron salidas para el guia con id ${id}`);
        return salidas;
    }
    async findAllByTour(id) {
        const salidas = await this.salidaRepository.find({
            where: { tour: { id: id } },
            relations: [
                'tour',
                'tour.ciudad',
                'guia',
                'idioma'
            ]
        });
        if (!salidas || salidas.length === 0)
            throw new common_1.NotFoundException(`No se encontraron salidas para el tour con id ${id}`);
        return salidas;
    }
    async findOne(id) {
        const salida = await this.salidaRepository.findOne({
            where: { id: id },
            relations: [
                'tour',
                'tour.ciudad',
                'guia',
                'idioma'
            ]
        });
        if (!salida)
            throw new common_1.NotFoundException(`Salida con id ${id} no encontrado`);
        return salida;
    }
    async update(id, updateSalidaDto) {
        const { tourId, guiaId, idiomaId } = updateSalidaDto, salidaDetails = __rest(updateSalidaDto, ["tourId", "guiaId", "idiomaId"]);
        const salida = await this.findOne(id);
        const tourSalida = await this.tourRepository.findOneBy({ id: tourId });
        if (!tourSalida)
            throw new common_1.BadRequestException(`No existe ningun tour con el id ${tourId}`);
        const guiaSalida = await this.guiaRepository.findOneBy({ id: guiaId });
        if (!guiaSalida)
            throw new common_1.BadRequestException(`No existe ningun guia con el id ${guiaId}`);
        const idiomaSalida = await this.idiomaRepository.findOneBy({ id: idiomaId });
        if (!idiomaSalida)
            throw new common_1.BadRequestException(`No existe ningun idioma con el id ${idiomaId}`);
        const dataModificada = Object.assign(Object.assign({}, salidaDetails), { tour: tourSalida, guia: guiaSalida, idioma: idiomaSalida });
        await this.salidaRepository.update(id = id, dataModificada);
        return await this.findOne(id);
    }
    async remove(id) {
        const salida = await this.findOne(id);
        await this.salidaRepository.remove(salida);
        if (salida)
            return {
                msg: `La salida con el id ${id} se ha eliminado correctamente.`
            };
    }
    handleDBExceptions(error) {
        if (error.sqlState === '23000')
            throw new common_1.BadRequestException(error.sqlMessage);
        if (error.status === 400)
            throw new common_1.BadRequestException(error.message);
        this.logger.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
SalidasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(salida_entity_1.Salida)),
    __param(1, (0, typeorm_1.InjectRepository)(tour_entity_1.Tour)),
    __param(2, (0, typeorm_1.InjectRepository)(guia_entity_1.Guia)),
    __param(3, (0, typeorm_1.InjectRepository)(idioma_entity_1.Idioma)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SalidasService);
exports.SalidasService = SalidasService;
//# sourceMappingURL=salidas.service.js.map