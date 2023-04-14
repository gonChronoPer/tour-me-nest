import { Module } from '@nestjs/common';
import { IdiomasService } from './idiomas.service';
import { IdiomasController } from './idiomas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './entities/idioma.entity';

@Module({
  controllers: [IdiomasController],
  providers: [IdiomasService],
  imports: [
    TypeOrmModule.forFeature([ Idioma ])
  ],
  exports: [
    IdiomasService,
    TypeOrmModule
  ]
})
export class IdiomasModule {}
