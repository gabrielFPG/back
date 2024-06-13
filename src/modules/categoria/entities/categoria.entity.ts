import { Materia } from "../../materia/entities/materia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombreCategoria: string;
    @Column()
    detalle: string;

    @OneToMany(() => Materia, (mate) => mate.categoria)
    materia: Materia
}
