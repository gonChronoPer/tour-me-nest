import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Tour } from './entities/tour.entity';
import { Repository } from 'typeorm';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';
export declare class ToursService {
    private readonly tourRepository;
    private readonly ciudadRepository;
    private readonly logger;
    constructor(tourRepository: Repository<Tour>, ciudadRepository: Repository<Ciudad>);
    create(createTourDto: CreateTourDto): Promise<Tour>;
    findAll(paginationDto: PaginationDto): Promise<Tour[]>;
    findAllByCiudad(id: number): Promise<Tour[]>;
    findOne(id: number): Promise<Tour>;
    update(id: number, updateTourDto: UpdateTourDto): Promise<Tour>;
    remove(id: number): Promise<{
        msg: string;
    }>;
    private handleDBExceptions;
}
