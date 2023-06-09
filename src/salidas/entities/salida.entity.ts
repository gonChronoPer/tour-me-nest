import { Guia } from "src/guias/entities/guia.entity";
import { Idioma } from "src/idiomas/entities/idioma.entity";
import { Reserva } from "src/reservas/entities/reserva.entity";
import { Tour } from "src/tours/entities/tour.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('salidas')
export class Salida {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        type: 'datetime',
        nullable: false
    })
    fechaHora: Date;

    @Column({
        type: 'int',
        default: 0,
        nullable: false
    })
    lugaresDisponibles: number;

    @Column({
        type: 'int',
        default: 0,
        nullable: false
    })
    lugaresReservados?: number;


    @Column({
        type: 'int',
        default: 0,
        nullable: false
    })
    lugaresCheckInReady?: number;


    @ManyToOne(
        () => Tour,
        ( tour ) => tour.salidas,
        {nullable: false}
    )
    tour: Tour;


    @ManyToOne(
        () => Guia,
        ( guia ) => guia.salidas,
        {nullable: false}
    )
    guia: Guia;


    @ManyToOne(
        () => Idioma,
        ( idioma ) => idioma.salidas,
        {nullable: false}
    )
    idioma: Idioma;


    @OneToMany(
        () => Reserva,
        ( salidaReservas ) => salidaReservas.salida,
        {cascade: true}
    )
    reservas?: Reserva[]

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    // Add this column to your entity!
    @DeleteDateColumn()
    deletedAt?: Date;
}
