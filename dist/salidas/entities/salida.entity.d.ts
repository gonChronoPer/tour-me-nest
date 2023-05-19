import { Guia } from "src/guias/entities/guia.entity";
import { Idioma } from "src/idiomas/entities/idioma.entity";
import { Reserva } from "src/reservas/entities/reserva.entity";
import { Tour } from "src/tours/entities/tour.entity";
export declare class Salida {
    id: number;
    fechaHora: Date;
    lugaresDisponibles: number;
    lugaresReservados?: number;
    lugaresCheckInReady?: number;
    tour: Tour;
    guia: Guia;
    idioma: Idioma;
    reservas?: Reserva[];
    created: Date;
    updated: Date;
    deletedAt?: Date;
}
