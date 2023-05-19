import { Salida } from "src/salidas/entities/salida.entity";
export declare class Idioma {
    id: number;
    nombre: string;
    salidas: Salida[];
    created: Date;
    updated: Date;
    deletedAt?: Date;
}
