import { Module } from '@nestjs/common';
import { GuiasService } from './guias.service';
import { GuiasController } from './guias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guia } from './entities/guia.entity';

@Module({
  controllers: [GuiasController],
  providers: [GuiasService],
  imports: [
    TypeOrmModule.forFeature([ Guia ])
  ],
  exports: [
    GuiasService,
    TypeOrmModule
  ]
})
export class GuiasModule {}
