import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "./curso.entity";
import { Materia } from "../../materia/entities/materia.entity";

@Entity('Curso_Materia')
export class CursoMateria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    cursoId: number;
    @Column()
    materiaId: number;

    @ManyToOne(() => Curso, (cur) => cur.cursoMateria)
    curso: Curso

    @ManyToOne(() => Materia, (mate) => mate.cursoMateria)
    materia: Materia

}