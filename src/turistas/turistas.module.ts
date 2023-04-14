import { Module } from '@nestjs/common';
import { TuristasService } from './turistas.service';
import { TuristasController } from './turistas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turista } from './entities/turista.entity';

@Module({
  controllers: [TuristasController],
  providers: [TuristasService],
  imports: [
    TypeOrmModule.forFeature([ Turista ])
  ],
  exports: [ 
    TuristasService,
    TypeOrmModule
  ]
})
export class TuristasModule {}
