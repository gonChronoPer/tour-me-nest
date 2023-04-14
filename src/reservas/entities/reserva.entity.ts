import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Type } from 'class-transformer';
import { Salida } from "src/salidas/entities/salida.entity";
import { Turista } from "src/turistas/entities/turista.entity";

@Entity('reservas')
export class Reserva {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'int',
        unique: true
    })
    codigo: number;

    @Column({
        type: 'int',
        nullable: false,
        default: 1
    })
    lugaresReservados: number;

    @ManyToOne(
        () => Salida,
        ( salida ) => salida.reservas,
    )
    salida: Salida


    @ManyToOne(
        () => Turista,
        ( turista ) => turista.reservas,
    )
    turista: Turista
}
