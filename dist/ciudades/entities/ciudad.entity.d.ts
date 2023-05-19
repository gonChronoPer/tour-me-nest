import { Pais } from "src/paises/entities/pais.entity";
import { Tour } from "src/tours/entities/tour.entity";
export declare class Ciudad {
    id: number;
    nombre: string;
    pais: Pais;
    tours?: Tour[];
    created: Date;
    updated: Date;
    deletedAt?: Date;
}
