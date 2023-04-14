import { Guia } from "src/guias/entities/guia.entity";
import { Idioma } from "src/idiomas/entities/idioma.entity";
import { Reserva } from "src/reservas/entities/reserva.entity";
import { Tour } from "src/tours/entities/tour.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('salidas')
export class Salida {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'date',
        nullable: false
    })
    fechaHora: Date;

    @Column({
        type: 'int',
        default: 0,
        nullable: false
    })
    lugaresDisponibles: number;



    @ManyToOne(
        () => Tour,
        ( tour ) => tour.salidas,
    )
    tour: Tour;


    @ManyToOne(
        () => Guia,
        ( guia ) => guia.salidas,
    )
    guia: Guia;


    @ManyToOne(
        () => Idioma,
        ( idioma ) => idioma.salidas,
    )
    idioma: Idioma;


    @OneToMany(
        () => Reserva,
        ( salidaReservas ) => salidaReservas.salida,
        {cascade: true}
    )
    reservas?: Reserva[]
}
