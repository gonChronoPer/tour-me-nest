import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { Salida } from 'src/salidas/entities/salida.entity';
import { Turista } from 'src/turistas/entities/turista.entity';

@Module({
  controllers: [ReservasController],
  providers: [ReservasService],
  imports: [ 
    TypeOrmModule.forFeature([ Reserva, Salida, Turista])
  ],
  exports: [ 
    ReservasService,
    TypeOrmModule
  ]
})
export class ReservasModule {}
