import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cedula: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    telefono: string;


}
