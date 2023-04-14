import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuiasService } from './guias.service';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';

@Controller('guias')
export class GuiasController {
  constructor(private readonly guiasService: GuiasService) {}

  @Post()
  create(@Body() createGuiaDto: CreateGuiaDto) {
    return this.guiasService.create(createGuiaDto);
  }

  @Get()
  findAll() {
    return this.guiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuiaDto: UpdateGuiaDto) {
    return this.guiasService.update(+id, updateGuiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guiasService.remove(+id);
  }
}
