import { Module } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CiudadesController } from './ciudades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { Pais } from 'src/paises/entities/pais.entity';
import { Type } from 'class-transformer';
import { Tour } from 'src/tours/entities/tour.entity';

@Module({
  controllers: [CiudadesController],
  providers: [CiudadesService],
  imports: [
    TypeOrmModule.forFeature([Ciudad, Pais])
  ],
  exports: [
    CiudadesService,
    TypeOrmModule
  ]
})
export class CiudadesModule {}
