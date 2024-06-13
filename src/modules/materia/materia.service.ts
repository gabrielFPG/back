import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MateriaService {
  constructor(@InjectRepository(Materia) private materiaRepository: Repository<Materia>) { }


  create(createMateriaDto: CreateMateriaDto) {
    return this.materiaRepository.save(createMateriaDto);
  }

  findAll() {
    return this.materiaRepository.find();
  }

  findOne(id: number) {
    return this.materiaRepository.findOne({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return this.materiaRepository.update(id, updateMateriaDto);
  }

  remove(id: number) {
    return this.materiaRepository.delete(id);
  }
}
