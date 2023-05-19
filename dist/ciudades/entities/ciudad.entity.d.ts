import { Tour } from "src/tours/entities/tour.entity";
export declare class Ciudad {
    id: number;
    nombre: string;
    portadaPath: string;
    tours?: Tour[];
    created: Date;
    updated: Date;
    deletedAt?: Date;
}
