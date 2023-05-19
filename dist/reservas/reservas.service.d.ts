import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Salida } from 'src/salidas/entities/salida.entity';
import { Turista } from 'src/turistas/entities/turista.entity';
export declare class ReservasService {
    private readonly reservaRepository;
    private readonly salidaRepository;
    private readonly turistaRepository;
    private readonly logger;
    constructor(reservaRepository: Repository<Reserva>, salidaRepository: Repository<Salida>, turistaRepository: Repository<Turista>);
    create(createReservaDto: CreateReservaDto): Promise<Reserva>;
    findAll(paginationDto: PaginationDto): Promise<Reserva[]>;
    findOne(id: number): Promise<Reserva>;
    update(id: number, updateReservaDto: UpdateReservaDto): string;
    remove(id: number): Promise<{
        msg: string;
    }>;
    checkin(codigo: number): Promise<{
        reserva: Reserva;
        salida: Salida;
    }>;
    private handleDBExceptions;
}
