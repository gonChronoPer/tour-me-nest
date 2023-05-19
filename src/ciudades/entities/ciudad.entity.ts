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

    @Column({
        type: 'text',
        nullable: false
    })
    portadaPath: string;

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
