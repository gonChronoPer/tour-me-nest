import { CreateCiudadeDto } from './dto/create-ciudad.dto';
import { UpdateCiudadeDto } from './dto/update-ciudad.dto';
import { Ciudad } from './entities/ciudad.entity';
import { Repository } from 'typeorm';
import { Pais } from 'src/paises/entities/pais.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class CiudadesService {
    private readonly ciudadRepository;
    private readonly paisRepository;
    private readonly logger;
    constructor(ciudadRepository: Repository<Ciudad>, paisRepository: Repository<Pais>);
    create(createCiudadeDto: CreateCiudadeDto): Promise<Ciudad>;
    findAll(paginationDto: PaginationDto): Promise<Ciudad[]>;
    findOne(id: number): Promise<Ciudad>;
    update(id: number, updateCiudadeDto: UpdateCiudadeDto): Promise<Ciudad>;
    remove(id: number): Promise<{
        msg: string;
    }>;
    private handleDBExceptions;
}
