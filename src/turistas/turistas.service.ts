import { Injectable } from '@nestjs/common';
import { CreateTuristaDto } from './dto/create-turista.dto';
import { UpdateTuristaDto } from './dto/update-turista.dto';

@Injectable()
export class TuristasService {
  create(createTuristaDto: CreateTuristaDto) {
    return 'This action adds a new turista';
  }

  findAll() {
    return `This action returns all turistas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} turista`;
  }

  update(id: number, updateTuristaDto: UpdateTuristaDto) {
    return `This action updates a #${id} turista`;
  }

  remove(id: number) {
    return `This action removes a #${id} turista`;
  }
}
