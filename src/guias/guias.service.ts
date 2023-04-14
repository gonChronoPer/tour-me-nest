import { Injectable } from '@nestjs/common';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';

@Injectable()
export class GuiasService {
  create(createGuiaDto: CreateGuiaDto) {
    return 'This action adds a new guia';
  }

  findAll() {
    return `This action returns all guias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guia`;
  }

  update(id: number, updateGuiaDto: UpdateGuiaDto) {
    return `This action updates a #${id} guia`;
  }

  remove(id: number) {
    return `This action removes a #${id} guia`;
  }
}
