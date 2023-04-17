import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TuristasService } from './turistas.service';
import { CreateTuristaDto } from './dto/create-turista.dto';
import { UpdateTuristaDto } from './dto/update-turista.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('turistas')
export class TuristasController {
  constructor(private readonly turistasService: TuristasService) {}

  @Post()
  create(@Body() createTuristaDto: CreateTuristaDto) {
    return this.turistasService.create(createTuristaDto);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.turistasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.turistasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTuristaDto: UpdateTuristaDto) {
    return this.turistasService.update(id, updateTuristaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.turistasService.remove(id);
  }
}
