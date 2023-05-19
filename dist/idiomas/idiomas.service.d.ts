import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Repository } from 'typeorm';
import { Idioma } from './entities/idioma.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class IdiomasService {
    private readonly idiomaRepository;
    private readonly logger;
    constructor(idiomaRepository: Repository<Idioma>);
    create(createIdiomaDto: CreateIdiomaDto): Promise<CreateIdiomaDto>;
    findAll(paginationDto: PaginationDto): Promise<Idioma[]>;
    findOne(id: number): Promise<Idioma>;
    update(id: number, updateIdiomaDto: UpdateIdiomaDto): Promise<Idioma>;
    remove(id: number): Promise<{
        msg: string;
    }>;
    private handleDBExceptions;
}
