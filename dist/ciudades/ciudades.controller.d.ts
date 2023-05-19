import { CiudadesService } from './ciudades.service';
import { CreateCiudadeDto } from './dto/create-ciudad.dto';
import { UpdateCiudadeDto } from './dto/update-ciudad.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class CiudadesController {
    private readonly ciudadesService;
    constructor(ciudadesService: CiudadesService);
    create(createCiudadeDto: CreateCiudadeDto): Promise<import("./entities/ciudad.entity").Ciudad>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/ciudad.entity").Ciudad[]>;
    findOne(id: number): Promise<import("./entities/ciudad.entity").Ciudad>;
    update(id: number, updateCiudadeDto: UpdateCiudadeDto): Promise<import("./entities/ciudad.entity").Ciudad>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
