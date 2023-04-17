import { Ciudad } from "src/ciudades/entities/ciudad.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(
        () => Ciudad,
        ( paisCiudad ) => paisCiudad.pais,
        {cascade: true}
    )
    ciudades?: Ciudad[]


}
