import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SalidasService } from './salidas.service';
import { CreateSalidaDto } from './dto/create-salida.dto';
import { UpdateSalidaDto } from './dto/update-salida.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('salidas')
export class SalidasController {
  constructor(private readonly salidasService: SalidasService) {}

  @Post()
  create(@Body() createSalidaDto: CreateSalidaDto) {
    return this.salidasService.create(createSalidaDto);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.salidasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.salidasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSalidaDto: UpdateSalidaDto) {
    return this.salidasService.update(id, updateSalidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.salidasService.remove(id);
  }
}
