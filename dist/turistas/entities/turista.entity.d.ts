import { Reserva } from "src/reservas/entities/reserva.entity";
export declare class Turista {
    id: number;
    email: string;
    password: string;
    nombre: string;
    apellidos: string;
    telefono: string;
    reservas?: Reserva[];
    created: Date;
    updated: Date;
    deletedAt?: Date;
}
