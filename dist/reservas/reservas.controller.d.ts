import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class ReservasController {
    private readonly reservasService;
    constructor(reservasService: ReservasService);
    create(createReservaDto: CreateReservaDto): Promise<import("./entities/reserva.entity").Reserva>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/reserva.entity").Reserva[]>;
    findAllByTurista(id: number): Promise<import("./entities/reserva.entity").Reserva[]>;
    findOne(id: number): Promise<import("./entities/reserva.entity").Reserva>;
    update(id: number, updateReservaDto: UpdateReservaDto): string;
    checkin(codigo: number, salida: number): Promise<void>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
