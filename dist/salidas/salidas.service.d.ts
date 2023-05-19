import { CreateSalidaDto } from './dto/create-salida.dto';
import { UpdateSalidaDto } from './dto/update-salida.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Salida } from './entities/salida.entity';
import { Repository } from 'typeorm';
import { Tour } from 'src/tours/entities/tour.entity';
import { Guia } from 'src/guias/entities/guia.entity';
import { Idioma } from 'src/idiomas/entities/idioma.entity';
export declare class SalidasService {
    private readonly salidaRepository;
    private readonly tourRepository;
    private readonly guiaRepository;
    private readonly idiomaRepository;
    private readonly logger;
    constructor(salidaRepository: Repository<Salida>, tourRepository: Repository<Tour>, guiaRepository: Repository<Guia>, idiomaRepository: Repository<Idioma>);
    create(createSalidaDto: CreateSalidaDto): Promise<Salida>;
    findAll(paginationDto: PaginationDto): Promise<Salida[]>;
    findAllByGuia(id: number): Promise<Salida[]>;
    findOne(id: number): Promise<Salida>;
    update(id: number, updateSalidaDto: UpdateSalidaDto): Promise<Salida>;
    remove(id: number): Promise<{
        msg: string;
    }>;
    private handleDBExceptions;
}
