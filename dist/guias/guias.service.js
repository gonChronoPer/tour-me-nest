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
exports.GuiasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const guia_entity_1 = require("./entities/guia.entity");
const typeorm_2 = require("typeorm");
let GuiasService = class GuiasService {
    constructor(guiaRepository) {
        this.guiaRepository = guiaRepository;
        this.logger = new common_1.Logger('GuiasService');
    }
    async create(createGuiaDto) {
        try {
            const detalleGuia = __rest(createGuiaDto, []);
            const guia = this.guiaRepository.create(detalleGuia);
            await this.guiaRepository.save(guia);
            return guia;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const guias = await this.guiaRepository.find({
            take: limit,
            skip: offset
        });
        return guias;
    }
    async findOne(id) {
        const guia = await this.guiaRepository.findOneBy({ id });
        if (!guia)
            throw new common_1.NotFoundException(`Guia con id ${id} no encontrada`);
        return guia;
    }
    async update(id, updateGuiaDto) {
        await this.guiaRepository.update(id = id, updateGuiaDto);
        return await this.findOne(id);
    }
    async remove(id) {
        const guia = await this.findOne(id);
        await this.guiaRepository.remove(guia);
        if (guia)
            return {
                msg: `El/La guia con el id ${id} se ha eliminado correctamente.`
            };
    }
    handleDBExceptions(error) {
        if (error.sqlState === '23000')
            throw new common_1.BadRequestException(error.sqlMessage);
        this.logger.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
GuiasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(guia_entity_1.Guia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GuiasService);
exports.GuiasService = GuiasService;
//# sourceMappingURL=guias.service.js.map