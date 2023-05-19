import { Ciudad } from "src/ciudades/entities/ciudad.entity";
import { Salida } from "src/salidas/entities/salida.entity";
export declare class Tour {
    id: number;
    nombre: string;
    descripcion: string;
    puntoEncuentro: string;
    precio: number;
    portadaPath: string;
    ciudad: Ciudad;
    salidas: Salida[];
    created: Date;
    updated: Date;
    deletedAt?: Date;
}
