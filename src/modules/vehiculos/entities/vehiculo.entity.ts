import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreVehiculo: string;

    @Column()
    descripcion: string;

    @ManyToOne(() => Categoria, (cat) => cat.vehiculo)
    categoria: Categoria[];

}
