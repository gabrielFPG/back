import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { SelectQueryBuilder } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity';

@ApiTags('vehiculos')
@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Post()
  create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculosService.create(createVehiculoDto);
  }

  @Get()
  findAll() {
    return this.vehiculosService.findAll();
  }

  @Get('back')
  async backend(@Req()req: Request){
    const builder = await this.vehiculosService.queryBuilder('vehiculos');
    if (req.query.q) {
      builder.where("vehiculos.nombre LIKE :q", { q: `%${req.query.q}%`})
    }

    const sort:any = req.query.sort;
    if (sort) {
      builder.orderBy('vehiculos.descripcion', sort.toUpperCase());
    }

    const page: number = parseInt(req.query.page as any) || 1;

    const limit=2;

    builder.offset((page - 1) * limit).limit(limit)

    const total = await builder.getCount();

    return {
      data: await builder.getMany(),
      total:total,
      page,
      last_page: Math.ceil(total/limit)
    }
  }
}

