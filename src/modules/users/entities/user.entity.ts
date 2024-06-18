import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Persona } from "../../persona/entities/persona.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    mail: string;

    @Column({ type: 'varchar', length: 200 })
    password: string;

    @Column({ type: 'int' })
    telefono: number;

    @OneToOne(() => Persona, persona => persona.user, { cascade: true })
    persona: Persona;
}
