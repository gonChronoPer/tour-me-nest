import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ToursService } from './tours.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @Post()
  create(@Body() createTourDto: CreateTourDto) {
    return this.toursService.create(createTourDto);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.toursService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.toursService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTourDto: UpdateTourDto) {
    return this.toursService.update(id, updateTourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.toursService.remove(id);
  }
}
