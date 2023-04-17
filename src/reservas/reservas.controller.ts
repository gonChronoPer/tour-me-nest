import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservasService.create(createReservaDto);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.reservasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reservasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservasService.update(id, updateReservaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reservasService.remove(id);
  }
}
