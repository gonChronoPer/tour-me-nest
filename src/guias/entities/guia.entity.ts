import { Salida } from "src/salidas/entities/salida.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('guias')
export class Guia {

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
        type: 'varchar',
        unique: true,
        nullable: false
    })
    nroDocumento: string;

    @Column({
        type: 'varchar'
    })
    direccion: string;

    @Column({
        type: 'varchar'
    })
    telefono: string;

    @OneToMany(
        () => Salida,
        ( guiaSalidas ) => guiaSalidas.guia,
        {cascade: true}
    )
    salidas: Salida[];

}
