import { CursoMateria } from "../../curso/entities/cursomateria.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreMateria: string;

    @Column()
    descripcion: string;

    @ManyToOne(() => Categoria, (cat) => cat.materia)
    categoria: Categoria

    @OneToMany(() => CursoMateria, curmate => curmate.materia)
    cursoMateria: CursoMateria[];
}
