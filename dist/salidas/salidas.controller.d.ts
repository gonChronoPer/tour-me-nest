import { SalidasService } from './salidas.service';
import { CreateSalidaDto } from './dto/create-salida.dto';
import { UpdateSalidaDto } from './dto/update-salida.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class SalidasController {
    private readonly salidasService;
    constructor(salidasService: SalidasService);
    create(createSalidaDto: CreateSalidaDto): Promise<import("./entities/salida.entity").Salida>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/salida.entity").Salida[]>;
    findOne(id: number): Promise<import("./entities/salida.entity").Salida>;
    findOneByGuia(id: number): Promise<import("./entities/salida.entity").Salida[]>;
    update(id: number, updateSalidaDto: UpdateSalidaDto): Promise<import("./entities/salida.entity").Salida>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
