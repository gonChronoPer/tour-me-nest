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
exports.ToursService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tour_entity_1 = require("./entities/tour.entity");
const typeorm_2 = require("typeorm");
const ciudad_entity_1 = require("../ciudades/entities/ciudad.entity");
let ToursService = class ToursService {
    constructor(tourRepository, ciudadRepository) {
        this.tourRepository = tourRepository;
        this.ciudadRepository = ciudadRepository;
        this.logger = new common_1.Logger('ToursService');
    }
    async create(createTourDto) {
        try {
            const { ciudadId } = createTourDto, tourDetails = __rest(createTourDto, ["ciudadId"]);
            const ciudadTour = await this.ciudadRepository.findOneBy({ id: ciudadId });
            if (!ciudadTour)
                throw new common_1.BadRequestException(`No existe ninguna ciudad con el id ${ciudadId}`);
            const tour = this.tourRepository.create(Object.assign(Object.assign({}, tourDetails), { ciudad: ciudadTour }));
            await this.tourRepository.save(tour);
            return tour;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const turistas = await this.tourRepository.find({
            take: limit,
            skip: offset,
            relations: {
                ciudad: true
            }
        });
        return turistas;
    }
    async findAllByCiudad(id) {
        const tours = await this.tourRepository.find({
            where: { ciudad: { id: id } },
            relations: [
                'ciudad',
            ]
        });
        if (!tours || tours.length === 0)
            throw new common_1.NotFoundException(`No se encontraron tours para la ciudad con id ${id}`);
        return tours;
    }
    async findOne(id) {
        const tour = await this.tourRepository.findOne({
            where: { id: id },
            relations: [
                'ciudad',
            ]
        });
        if (!tour)
            throw new common_1.NotFoundException(`Tour con id ${id} no encontrado`);
        return tour;
    }
    async update(id, updateTourDto) {
        const { ciudadId } = updateTourDto, tourDetails = __rest(updateTourDto, ["ciudadId"]);
        const tour = await this.findOne(id);
        const ciudadTour = await this.ciudadRepository.findOneBy({ id: ciudadId });
        if (!ciudadTour)
            throw new common_1.BadRequestException(`No existe ninguna ciudad con el id ${ciudadId}`);
        const dataModificada = Object.assign(Object.assign({}, tourDetails), { ciudad: ciudadTour });
        await this.tourRepository.update(id = id, dataModificada);
        return await this.findOne(id);
    }
    async remove(id) {
        const tour = await this.findOne(id);
        await this.tourRepository.remove(tour);
        if (tour)
            return {
                msg: `El tour con el id ${id} se ha eliminado correctamente.`
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
ToursService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tour_entity_1.Tour)),
    __param(1, (0, typeorm_1.InjectRepository)(ciudad_entity_1.Ciudad)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ToursService);
exports.ToursService = ToursService;
//# sourceMappingURL=tours.service.js.map