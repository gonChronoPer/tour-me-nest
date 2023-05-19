import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class PaisesService {
    private readonly paisRepository;
    private readonly logger;
    constructor(paisRepository: Repository<Pais>);
    create(createPaisDto: CreatePaisDto): Promise<CreatePaisDto>;
    findAll(paginationDto: PaginationDto): Promise<Pais[]>;
    findOne(id: number): Promise<Pais>;
    update(id: number, updatePaisDto: UpdatePaisDto): Promise<Pais>;
    remove(id: number): Promise<{
        msg: string;
    }>;
    private handleDBExceptions;
}
