import { Salida } from "src/salidas/entities/salida.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'idiomas'
})
export class Idioma {

    @PrimaryGeneratedColumn()
    id: number;

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

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    // Add this column to your entity!
    @DeleteDateColumn()
    deletedAt?: Date;
}
