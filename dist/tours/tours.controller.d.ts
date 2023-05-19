import { ToursService } from './tours.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class ToursController {
    private readonly toursService;
    constructor(toursService: ToursService);
    create(createTourDto: CreateTourDto): Promise<import("./entities/tour.entity").Tour>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/tour.entity").Tour[]>;
    findAllByCiudad(id: number): Promise<import("./entities/tour.entity").Tour[]>;
    findOne(id: number): Promise<import("./entities/tour.entity").Tour>;
    update(id: number, updateTourDto: UpdateTourDto): Promise<import("./entities/tour.entity").Tour>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
