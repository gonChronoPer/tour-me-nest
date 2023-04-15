import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaisesService } from './paises.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('paises')
export class PaisesController {
  
  constructor(
    private readonly paisesService: PaisesService
  ) {}

  @Post()
  create(@Body() createPaiseDto: CreatePaisDto) {
    return this.paisesService.create(createPaiseDto);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.paisesService.findAll( paginationDto );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaiseDto: UpdatePaisDto) {
    return this.paisesService.update(id, updatePaiseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paisesService.remove(id);
  }
}
