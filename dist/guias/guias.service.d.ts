import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Guia } from './entities/guia.entity';
import { Repository } from 'typeorm';
export declare class GuiasService {
    private readonly guiaRepository;
    private readonly logger;
    constructor(guiaRepository: Repository<Guia>);
    create(createGuiaDto: CreateGuiaDto): Promise<Guia>;
    findAll(paginationDto: PaginationDto): Promise<Guia[]>;
    findOne(id: number): Promise<Guia>;
    findOneByMail(mail: string): Promise<Guia>;
    update(id: number, updateGuiaDto: UpdateGuiaDto): Promise<Guia>;
    remove(id: number): Promise<{
        msg: string;
    }>;
    private handleDBExceptions;
}
