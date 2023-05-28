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
exports.TuristasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const turista_entity_1 = require("./entities/turista.entity");
const typeorm_2 = require("typeorm");
let TuristasService = class TuristasService {
    constructor(turistaRepository) {
        this.turistaRepository = turistaRepository;
        this.logger = new common_1.Logger('TuristasService');
    }
    async create(createTuristaDto) {
        try {
            const detalleTurista = __rest(createTuristaDto, []);
            const turista = this.turistaRepository.create(detalleTurista);
            await this.turistaRepository.save(turista);
            return turista;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const turistas = await this.turistaRepository.find({
            take: limit,
            skip: offset
        });
        return turistas;
    }
    async findOne(id) {
        const turista = await this.turistaRepository.findOneBy({ id });
        if (!turista)
            throw new common_1.NotFoundException(`Turista con id ${id} no encontrado`);
        return turista;
    }
    async findOneByMail(mail) {
        const guia = await this.turistaRepository.findOneBy({ email: mail });
        if (!guia)
            throw new common_1.NotFoundException(`Turista con mail ${mail} no encontrado`);
        return guia;
    }
    async update(id, updateTuristaDto) {
        await this.turistaRepository.update(id = id, updateTuristaDto);
        return await this.findOne(id);
    }
    async remove(id) {
        const turista = await this.findOne(id);
        await this.turistaRepository.remove(turista);
        if (turista)
            return {
                msg: `El/La turista con el id ${id} se ha eliminado correctamente.`
            };
    }
    handleDBExceptions(error) {
        if (error.sqlState === '23000')
            throw new common_1.BadRequestException(error.sqlMessage);
        this.logger.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
TuristasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(turista_entity_1.Turista)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TuristasService);
exports.TuristasService = TuristasService;
//# sourceMappingURL=turistas.service.js.map