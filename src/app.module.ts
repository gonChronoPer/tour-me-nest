import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisesModule } from './paises/paises.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { IdiomasModule } from './idiomas/idiomas.module';
import { ToursModule } from './tours/tours.module';
import { ReservasModule } from './reservas/reservas.module';
import { GuiasModule } from './guias/guias.module';
import { TuristasModule } from './turistas/turistas.module';
import { AuthModule } from './auth/auth.module';
import { SalidasModule } from './salidas/salidas.module';

@Module({
  imports: [
    
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,      
      autoLoadEntities: true,
      synchronize: true,
    }),

    PaisesModule,

    CiudadesModule,

    IdiomasModule,

    ToursModule,

    ReservasModule,

    GuiasModule,

    TuristasModule,

    AuthModule,

    SalidasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
