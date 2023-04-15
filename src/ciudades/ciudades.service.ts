import { Injectable } from '@nestjs/common';
import { CreateCiudadeDto } from './dto/create-ciudad.dto';
import { UpdateCiudadeDto } from './dto/update-ciudad.dto';

@Injectable()
export class CiudadesService {
  create(createCiudadeDto: CreateCiudadeDto) {
    return 'This action adds a new ciudade';
  }

  findAll() {
    return `This action returns all ciudades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudade`;
  }

  update(id: number, updateCiudadeDto: UpdateCiudadeDto) {
    return `This action updates a #${id} ciudade`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudade`;
  }
}
