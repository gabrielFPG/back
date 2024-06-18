import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vehiculo } from '../../vehiculos/entities/vehiculo.entity';

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 250 })
    nombreCategoria: string;

    @Column({ type: "text", nullable:true })
    detalle: string;

    @OneToMany(() => Vehiculo, (vehi) => vehi.categoria)
    vehiculos: Vehiculo[];
}
