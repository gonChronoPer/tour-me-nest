import { Module } from '@nestjs/common';
import { SalidasService } from './salidas.service';
import { SalidasController } from './salidas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salida } from './entities/salida.entity';
import { Guia } from 'src/guias/entities/guia.entity';
import { Tour } from 'src/tours/entities/tour.entity';
import { Idioma } from 'src/idiomas/entities/idioma.entity';

@Module({
  controllers: [SalidasController],
  providers: [SalidasService],
  imports: [
    TypeOrmModule.forFeature([ Salida, Guia, Tour, Idioma])
  ],
  exports: [
    SalidasService,
    TypeOrmModule
  ]
})
export class SalidasModule {}
