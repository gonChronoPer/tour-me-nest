import { TuristasService } from './turistas.service';
import { CreateTuristaDto } from './dto/create-turista.dto';
import { UpdateTuristaDto } from './dto/update-turista.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class TuristasController {
    private readonly turistasService;
    constructor(turistasService: TuristasService);
    create(createTuristaDto: CreateTuristaDto): Promise<import("./entities/turista.entity").Turista>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/turista.entity").Turista[]>;
    findOne(id: number): Promise<import("./entities/turista.entity").Turista>;
    findOneByMail(mail: string): Promise<import("./entities/turista.entity").Turista>;
    update(id: number, updateTuristaDto: UpdateTuristaDto): Promise<import("./entities/turista.entity").Turista>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
