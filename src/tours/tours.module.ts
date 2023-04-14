import { Module } from '@nestjs/common';
import { ToursService } from './tours.service';
import { ToursController } from './tours.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';

@Module({
  controllers: [ToursController],
  providers: [ToursService],
  imports: [
    TypeOrmModule.forFeature([Tour, Ciudad])
  ],
  exports: [ 
    ToursService,
    TypeOrmModule
  ]
})
export class ToursModule {}
