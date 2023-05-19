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
exports.ReservasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reserva_entity_1 = require("./entities/reserva.entity");
const typeorm_2 = require("typeorm");
const salida_entity_1 = require("../salidas/entities/salida.entity");
const turista_entity_1 = require("../turistas/entities/turista.entity");
let ReservasService = class ReservasService {
    constructor(reservaRepository, salidaRepository, turistaRepository) {
        this.reservaRepository = reservaRepository;
        this.salidaRepository = salidaRepository;
        this.turistaRepository = turistaRepository;
        this.logger = new common_1.Logger('ReservasService');
    }
    async create(createReservaDto) {
        try {
            const { salidaId, turistaId } = createReservaDto, reservaDetails = __rest(createReservaDto, ["salidaId", "turistaId"]);
            const salidaReserva = await this.salidaRepository.findOneBy({ id: salidaId });
            if (!salidaReserva)
                throw new common_1.BadRequestException(`No existe ninguna salida con el id ${salidaId}`);
            const turistaReserva = await this.turistaRepository.findOneBy({ id: turistaId });
            if (!turistaReserva)
                throw new common_1.BadRequestException(`No existe ningun turista con el id ${turistaId}`);
            const reserva = this.reservaRepository.create(Object.assign(Object.assign({}, reservaDetails), { salida: salidaReserva, turista: turistaReserva }));
            reserva.codigo = Math.floor(Math.random() * 99999999);
            if (reserva.salida.lugaresDisponibles <= 0)
                throw new common_1.BadRequestException(`No hay mas lugares disponibles en el tour`);
            if (reserva.salida.lugaresDisponibles < reservaDetails.lugaresReservados)
                throw new common_1.BadRequestException(`Esta queriendo reservar mas lugares de los disponibles`);
            reserva.salida.lugaresDisponibles -= reservaDetails.lugaresReservados;
            reserva.salida.lugaresReservados += reservaDetails.lugaresReservados;
            await this.salidaRepository.update(reserva.salida.id, reserva.salida);
            await this.reservaRepository.save(reserva);
            return await this.findOne(reserva.id);
            ;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const reservas = await this.reservaRepository.find({
            take: limit,
            skip: offset,
            relations: {
                salida: {
                    tour: {
                        ciudad: {
                            pais: true
                        }
                    },
                    guia: true,
                    idioma: true
                },
                turista: true
            },
        });
        return reservas;
    }
    async findAllByTurista(id) {
        const reservas = await this.reservaRepository.find({
            where: { turista: { id: id } },
            relations: [
                'salida',
                'salida.tour',
                'salida.tour.ciudad',
                'salida.tour.ciudad.pais',
                'salida.guia',
                'salida.idioma',
                'turista'
            ]
        });
        if (!reservas || reservas.length === 0)
            throw new common_1.NotFoundException(`No se encontraron reservas para el turista con id ${id}`);
        return reservas;
    }
    async findOne(id) {
        const reserva = await this.reservaRepository.findOne({
            where: { id: id },
            relations: [
                'salida',
                'salida.tour',
                'salida.tour.ciudad',
                'salida.tour.ciudad.pais',
                'salida.guia',
                'salida.idioma',
                'turista'
            ]
        });
        if (!reserva)
            throw new common_1.NotFoundException(`Reserva con id ${id} no encontrado`);
        return reserva;
    }
    update(id, updateReservaDto) {
        return `This action updates a #${id} reserva`;
    }
    async remove(id) {
        const reserva = await this.findOne(id);
        await this.reservaRepository.remove(reserva);
        if (reserva)
            return {
                msg: `La reserva con el id ${id} se ha eliminado correctamente.`
            };
    }
    async checkin(codigo) {
        try {
            const reserva = await this.reservaRepository.findOne({
                where: {
                    codigo: codigo,
                },
                relations: [
                    'turista',
                    'salida',
                ],
            });
            if (reserva.usada)
                throw new common_1.BadRequestException(`Ya se realizó el checkin de esta reserva.`);
            console.log(reserva);
            reserva.salida.lugaresCheckInReady += reserva.lugaresReservados;
            await this.salidaRepository.update(reserva.salida.id, reserva.salida);
            reserva.usada = true;
            await this.reservaRepository.update(reserva.id, reserva);
            return {
                reserva: await this.findOne(reserva.id),
                salida: await this.salidaRepository.findOneBy({ id: reserva.salida.id })
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
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
ReservasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reserva_entity_1.Reserva)),
    __param(1, (0, typeorm_1.InjectRepository)(salida_entity_1.Salida)),
    __param(2, (0, typeorm_1.InjectRepository)(turista_entity_1.Turista)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReservasService);
exports.ReservasService = ReservasService;
//# sourceMappingURL=reservas.service.js.map