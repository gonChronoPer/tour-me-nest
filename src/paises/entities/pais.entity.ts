import { Ciudad } from "src/ciudades/entities/ciudad.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'paises'
})
export class Pais {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    nombre: string

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    // Add this column to your entity!
    @DeleteDateColumn()
    deletedAt?: Date;

    @OneToMany(
        () => Ciudad,
        ( paisCiudad ) => paisCiudad.pais,
        {cascade: true}
    )
    ciudades?: Ciudad[]
}
