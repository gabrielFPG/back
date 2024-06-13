import { Estudiante } from "../../estudiante/entities/estudiante.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CursoMateria } from "./cursomateria.entity";

@Entity('cursos')
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreCurso: string;

    @Column()
    descripcion: string;

    @ManyToOne(() => Estudiante)
    estudiante: Estudiante

    @OneToMany(() => CursoMateria, curmate => curmate.curso)
    cursoMateria: CursoMateria[];
}
