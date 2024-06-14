import { Vehiculo } from "../../vehiculos/entities/vehiculo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombreCategoria: string;
    @Column()
    detalle: string;

    @OneToMany(() => Vehiculo, (vehi) => vehi.categoria)
    vehiculo: Vehiculo
}
