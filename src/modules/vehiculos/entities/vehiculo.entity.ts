import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity()
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar", length:250})
    nombreVehiculo: string;

    @Column({type:"text", nullable:true})
    descripcion: string;

    @ManyToOne(() => Categoria, categoria=>categoria.vehiculos)
    categoria: Categoria;
}
