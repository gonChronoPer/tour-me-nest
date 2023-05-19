import { Ciudad } from "src/ciudades/entities/ciudad.entity";
export declare class Pais {
    id: number;
    nombre: string;
    created: Date;
    updated: Date;
    deletedAt?: Date;
    ciudades?: Ciudad[];
}
