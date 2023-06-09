import { Ciudad } from "src/ciudades/entities/ciudad.entity";
import { Salida } from "src/salidas/entities/salida.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tours')
export class Tour {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        unique: true,
        nullable: false
    })
    nombre: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    descripcion: string;
    
    @Column({
        type: 'varchar',
        nullable: false
    })
    puntoEncuentro: string;

    @Column({
        type: 'float',
        default: 0,
        nullable: false
    })
    precio: number;
    
    @Column({
        type: 'text',
        nullable: true
    })
    portadaPath: string;

    @ManyToOne(
        () => Ciudad,
        ( ciudad ) => ciudad.tours,
        {nullable: false}
    )
    ciudad: Ciudad;

    @OneToMany(
        () => Salida,
        ( tourSalidas ) => tourSalidas.tour,
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
