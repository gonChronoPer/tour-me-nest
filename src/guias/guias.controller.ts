import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GuiasService } from './guias.service';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('guias')
export class GuiasController {
  constructor(private readonly guiasService: GuiasService) {}

  @Post()
  create(@Body() createGuiaDto: CreateGuiaDto) {
    return this.guiasService.create(createGuiaDto);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.guiasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.guiasService.findOne(id);
  }

  @Get('/:mail')
  findOneByMail(@Param('mail') mail: string) {
    return this.guiasService.findOneByMail(mail);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGuiaDto: UpdateGuiaDto) {
    return this.guiasService.update(id, updateGuiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.guiasService.remove(id);
  }
}
