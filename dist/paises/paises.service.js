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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pais_entity_1 = require("./entities/pais.entity");
const typeorm_2 = require("typeorm");
let PaisesService = class PaisesService {
    constructor(paisRepository) {
        this.paisRepository = paisRepository;
        this.logger = new common_1.Logger('PaisesService');
    }
    async create(createPaisDto) {
        try {
            const pais = createPaisDto;
            const product = this.paisRepository.create(pais);
            await this.paisRepository.save(pais);
            return pais;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const paises = await this.paisRepository.find({
            take: limit,
            skip: offset
        });
        return paises;
    }
    async findOne(id) {
        const pais = await this.paisRepository.findOneBy({ id });
        if (!pais)
            throw new common_1.NotFoundException(`Pais con id ${id} no encontrado`);
        return pais;
    }
    async update(id, updatePaisDto) {
        try {
            await this.paisRepository.update(id = id, updatePaisDto);
            return await this.findOne(id);
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async remove(id) {
        const pais = await this.findOne(id);
        await this.paisRepository.remove(pais);
        if (pais)
            return {
                msg: `El pais con el id ${id} se ha eliminado correctamente.`
            };
    }
    handleDBExceptions(error) {
        if (error.sqlState === '23000')
            throw new common_1.BadRequestException(error.sqlMessage);
        this.logger.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
PaisesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pais_entity_1.Pais)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaisesService);
exports.PaisesService = PaisesService;
//# sourceMappingURL=paises.service.js.map