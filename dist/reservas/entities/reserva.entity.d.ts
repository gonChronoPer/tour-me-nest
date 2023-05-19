import { Salida } from "src/salidas/entities/salida.entity";
import { Turista } from "src/turistas/entities/turista.entity";
export declare class Reserva {
    id: number;
    codigo: number;
    lugaresReservados: number;
    usada: boolean;
    salida: Salida;
    turista: Turista;
    created: Date;
    updated: Date;
    deletedAt?: Date;
}
