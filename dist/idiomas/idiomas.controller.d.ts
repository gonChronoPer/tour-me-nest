import { IdiomasService } from './idiomas.service';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class IdiomasController {
    private readonly idiomasService;
    constructor(idiomasService: IdiomasService);
    create(createIdiomaDto: CreateIdiomaDto): Promise<CreateIdiomaDto>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/idioma.entity").Idioma[]>;
    findOne(id: number): Promise<import("./entities/idioma.entity").Idioma>;
    update(id: number, updateIdiomaDto: UpdateIdiomaDto): Promise<import("./entities/idioma.entity").Idioma>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
