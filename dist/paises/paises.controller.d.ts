import { PaisesService } from './paises.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class PaisesController {
    private readonly paisesService;
    constructor(paisesService: PaisesService);
    create(createPaiseDto: CreatePaisDto): Promise<CreatePaisDto>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/pais.entity").Pais[]>;
    findOne(id: number): Promise<import("./entities/pais.entity").Pais>;
    update(id: number, updatePaiseDto: UpdatePaisDto): Promise<import("./entities/pais.entity").Pais>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
