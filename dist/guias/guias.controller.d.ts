import { GuiasService } from './guias.service';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class GuiasController {
    private readonly guiasService;
    constructor(guiasService: GuiasService);
    create(createGuiaDto: CreateGuiaDto): Promise<import("./entities/guia.entity").Guia>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/guia.entity").Guia[]>;
    findOne(id: number): Promise<import("./entities/guia.entity").Guia>;
    findOneByMail(mail: string): Promise<import("./entities/guia.entity").Guia>;
    update(id: number, updateGuiaDto: UpdateGuiaDto): Promise<import("./entities/guia.entity").Guia>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
