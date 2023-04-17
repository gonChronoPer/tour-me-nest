import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: string;

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
    fullName: string;

    @Column({
        type: "bool",
        default: true
    })
    isActive: boolean;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();
    }
}
