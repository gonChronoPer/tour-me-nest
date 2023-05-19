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
exports.IdiomasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const idioma_entity_1 = require("./entities/idioma.entity");
const typeorm_2 = require("@nestjs/typeorm");
let IdiomasService = class IdiomasService {
    constructor(idiomaRepository) {
        this.idiomaRepository = idiomaRepository;
        this.logger = new common_1.Logger('IdiomasService');
    }
    async create(createIdiomaDto) {
        try {
            const idioma = createIdiomaDto;
            const product = this.idiomaRepository.create(idioma);
            await this.idiomaRepository.save(idioma);
            return idioma;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const idiomas = await this.idiomaRepository.find({
            take: limit,
            skip: offset
        });
        return idiomas;
    }
    async findOne(id) {
        const idioma = await this.idiomaRepository.findOneBy({ id });
        if (!idioma)
            throw new common_1.NotFoundException(`Idioma con id ${id} no encontrado`);
        return idioma;
    }
    async update(id, updateIdiomaDto) {
        try {
            await this.idiomaRepository.update(id = id, updateIdiomaDto);
            return await this.findOne(id);
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async remove(id) {
        const idioma = await this.findOne(id);
        await this.idiomaRepository.remove(idioma);
        if (idioma)
            return {
                msg: `El idioma con el id ${id} se ha eliminado correctamente.`
            };
    }
    handleDBExceptions(error) {
        if (error.sqlState === '23000')
            throw new common_1.BadRequestException(error.sqlMessage);
        this.logger.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
IdiomasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(idioma_entity_1.Idioma)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], IdiomasService);
exports.IdiomasService = IdiomasService;
//# sourceMappingURL=idiomas.service.js.map