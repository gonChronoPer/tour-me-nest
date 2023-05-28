import { CreateTuristaDto } from './dto/create-turista.dto';
import { UpdateTuristaDto } from './dto/update-turista.dto';
import { Turista } from './entities/turista.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class TuristasService {
    private readonly turistaRepository;
    private readonly logger;
    constructor(turistaRepository: Repository<Turista>);
    create(createTuristaDto: CreateTuristaDto): Promise<Turista>;
    findAll(paginationDto: PaginationDto): Promise<Turista[]>;
    findOne(id: number): Promise<Turista>;
    findOneByMail(mail: string): Promise<Turista>;
    update(id: number, updateTuristaDto: UpdateTuristaDto): Promise<Turista>;
    remove(id: number): Promise<{
        msg: string;
    }>;
    private handleDBExceptions;
}
