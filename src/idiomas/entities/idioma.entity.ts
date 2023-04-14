import { Salida } from "src/salidas/entities/salida.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'idiomas'
})
export class Idioma {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    nombre: string;


    @OneToMany(
        () => Salida,
        ( idiomaSalidas ) => idiomaSalidas.idioma,
        {cascade: true}
    )
    salidas: Salida[];
}
