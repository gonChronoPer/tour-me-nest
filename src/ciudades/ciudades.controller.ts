import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CreateCiudadeDto } from './dto/create-ciudad.dto';
import { UpdateCiudadeDto } from './dto/update-ciudad.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('ciudades')
export class CiudadesController {
  constructor(private readonly ciudadesService: CiudadesService) {}

  @Post()
  create(@Body() createCiudadeDto: CreateCiudadeDto) {
    return this.ciudadesService.create(createCiudadeDto);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.ciudadesService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ciudadesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCiudadeDto: UpdateCiudadeDto) {
    return this.ciudadesService.update(id, updateCiudadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ciudadesService.remove(id);
  }
}
