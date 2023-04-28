import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Type } from 'class-transformer';
import { Salida } from "src/salidas/entities/salida.entity";
import { Turista } from "src/turistas/entities/turista.entity";
import { BlobOptions } from "buffer";

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

    @Column({
        type: 'boolean',
        default: false
    })
    usada: boolean;

    @ManyToOne(
        () => Salida,
        ( salida ) => salida.reservas,
        {nullable: false}
    )
    salida: Salida


    @ManyToOne(
        () => Turista,
        ( turista ) => turista.reservas,
        {nullable: false}
    )
    turista: Turista

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    // Add this column to your entity!
    @DeleteDateColumn()
    deletedAt?: Date;
}
