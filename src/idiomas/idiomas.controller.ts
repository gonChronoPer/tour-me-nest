import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { IdiomasService } from './idiomas.service';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('idiomas')
export class IdiomasController {
  constructor(private readonly idiomasService: IdiomasService) {}

  @Post()
  create(@Body() createIdiomaDto: CreateIdiomaDto) {
    return this.idiomasService.create(createIdiomaDto);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.idiomasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.idiomasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateIdiomaDto: UpdateIdiomaDto) {
    return this.idiomasService.update(id, updateIdiomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.idiomasService.remove(id);
  }
}
