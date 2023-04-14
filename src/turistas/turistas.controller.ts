import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TuristasService } from './turistas.service';
import { CreateTuristaDto } from './dto/create-turista.dto';
import { UpdateTuristaDto } from './dto/update-turista.dto';

@Controller('turistas')
export class TuristasController {
  constructor(private readonly turistasService: TuristasService) {}

  @Post()
  create(@Body() createTuristaDto: CreateTuristaDto) {
    return this.turistasService.create(createTuristaDto);
  }

  @Get()
  findAll() {
    return this.turistasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turistasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTuristaDto: UpdateTuristaDto) {
    return this.turistasService.update(+id, updateTuristaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turistasService.remove(+id);
  }
}
