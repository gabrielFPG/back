import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculosService {

  constructor(@InjectRepository(Vehiculo) private vehiculoRepository: Repository<Vehiculo>){}

  queryBuilder(alias: string) {
    return this.vehiculoRepository.createQueryBuilder(alias);
  }

  create(createVehiculoDto: CreateVehiculoDto) {
    const vehiculo = this.vehiculoRepository.create(createVehiculoDto);
    return this.vehiculoRepository.save(vehiculo);
  }

  findAll() {
    return this.vehiculoRepository.find();
  }

  findOne(id: number) {
    return this.vehiculoRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    await this.vehiculoRepository.update(id, updateVehiculoDto);
    return this.vehiculoRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async remove(id: number) {
    await this.vehiculoRepository.delete(id);
    return { deleted: true };
  }
}
