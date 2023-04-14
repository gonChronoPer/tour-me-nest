import { IsEmail } from "class-validator";
import { Reserva } from "src/reservas/entities/reserva.entity";
import { Column, Entity, Long, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('turistas')
export class Turista {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar'
    })
    nombre: string;
    
    @Column({
        type: 'varchar'
    })
    apellidos: string;

    @Column({
        type: 'varchar'
    })
    telefono: string;

    @OneToMany(
        () => Reserva,
        ( turistaReservas ) => turistaReservas.turista,
        {cascade: true}
    )
    reservas?: Reserva[]
}
