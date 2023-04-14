import { Module } from '@nestjs/common';
import { PaisesService } from './paises.service';
import { PaisesController } from './paises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';

@Module({
  controllers: [PaisesController],
  providers: [PaisesService],
  imports: [
    TypeOrmModule.forFeature([ Pais, Ciudad ])
  ],
  exports:[
    PaisesService,
    TypeOrmModule
  ]
})
export class PaisesModule {}
