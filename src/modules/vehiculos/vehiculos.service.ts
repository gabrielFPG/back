import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculosService {

  constructor(@InjectRepository(Vehiculo) private vehiculoRepository: Repository<Vehiculo>){}
  create(createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculoRepository.save(createVehiculoDto);
  }

  findAll() {
    return this.vehiculoRepository.find;
  }

  findOne(id: number) {
    return this.vehiculoRepository.findOne({
      where:{
        id:id
      }
    });
  }

  update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    return this.vehiculoRepository.update(id, updateVehiculoDto);
  }

  remove(id: number) {
    return this.vehiculoRepository.delete(id);
  }
}
