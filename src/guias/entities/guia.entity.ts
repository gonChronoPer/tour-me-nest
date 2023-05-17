import { Salida } from "src/salidas/entities/salida.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
        type: 'varchar',
        select: false
    })
    password: string;

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

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    // Add this column to your entity!
    @DeleteDateColumn()
    deletedAt?: Date;

}
