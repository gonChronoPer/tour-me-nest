import { Pais } from "src/paises/entities/pais.entity";
import { Tour } from "src/tours/entities/tour.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'ciudades'
})
export class Ciudad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    nombre: string

    @ManyToOne(
        () => Pais,
        ( pais ) => pais.ciudades,
        { onDelete: 'CASCADE',
          nullable: false},
        
    )
    pais: Pais

    @OneToMany(
        () => Tour,
        ( ciudadTours ) => ciudadTours.ciudad,
        {cascade: true}
    )
    tours?: Tour[]

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    // Add this column to your entity!
    @DeleteDateColumn()
    deletedAt?: Date;
}
