import { Salida } from "src/salidas/entities/salida.entity";
export declare class Guia {
    id: number;
    email: string;
    password: string;
    nombre: string;
    apellidos: string;
    nroDocumento: string;
    direccion: string;
    telefono: string;
    salidas: Salida[];
    created: Date;
    updated: Date;
    deletedAt?: Date;
}
