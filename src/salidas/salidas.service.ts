import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateSalidaDto } from './dto/create-salida.dto';
import { UpdateSalidaDto } from './dto/update-salida.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salida } from './entities/salida.entity';
import { Repository } from 'typeorm';
import { Tour } from 'src/tours/entities/tour.entity';
import { Guia } from 'src/guias/entities/guia.entity';
import { Idioma } from 'src/idiomas/entities/idioma.entity';
import { IdiomasController } from '../idiomas/idiomas.controller';

@Injectable()
export class SalidasService {

  private readonly logger = new Logger('SalidasService');

  constructor(
    @InjectRepository(Salida)
    private readonly salidaRepository: Repository<Salida>,

    @InjectRepository(Tour)
    private readonly tourRepository: Repository<Tour>,

    @InjectRepository(Guia)
    private readonly guiaRepository: Repository<Guia>,

    @InjectRepository(Idioma)
    private readonly idiomaRepository: Repository<Idioma>,
  ) {}


  async create(createSalidaDto: CreateSalidaDto) {
    try {
      const { tourId, guiaId, idiomaId , ...salidaDetails } = createSalidaDto;

      const tourSalida = await this.tourRepository.findOneBy({ id: tourId});
      if( !tourSalida )
        throw new BadRequestException(`No existe ningun tour con el id ${tourId}`);

      const guiaSalida = await this.guiaRepository.findOneBy({ id: guiaId});
      if( !guiaSalida )
        throw new BadRequestException(`No existe ningun guia con el id ${guiaId}`);

      const idiomaSalida = await this.idiomaRepository.findOneBy({ id: idiomaId});
      if( !idiomaSalida )
        throw new BadRequestException(`No existe ningun idioma con el id ${idiomaId}`);
      

      const salida = this.salidaRepository.create({
        ...salidaDetails,
        tour: tourSalida,
        guia: guiaSalida,
        idioma: idiomaSalida
      });
      
      await this.salidaRepository.save( salida );

      return salida;
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const salidas = await this.salidaRepository.find({
      take: limit,
      skip: offset,
      relations: {
        tour: {
          ciudad: {
            pais: true
          }
        },
        guia: true,
        idioma: true
      }
    });

    return salidas;
  }

  async findAllByGuia(id: number) {
    const salidas = await this.salidaRepository.find({
      where: { guia: { id: id} },
      relations: [
        'tour',
        'tour.ciudad',
        'tour.ciudad.pais', 
        'guia', 
        'idioma'
      ]
    });
    
    if ( !salidas || salidas.length === 0) 
        throw new NotFoundException(`No se encontraron salidas para el guia con id ${ id }`);

      return salidas;
  }

  async findOne(id: number) {
    const salida = await this.salidaRepository.findOne({
      where: { id: id },
      relations: [
        'tour',
        'tour.ciudad',
        'tour.ciudad.pais', 
        'guia', 
        'idioma'
      ]
    });

    if ( !salida ) 
      throw new NotFoundException(`Salida con id ${ id } no encontrado`);

    return salida;
  }

  async update(id: number, updateSalidaDto: UpdateSalidaDto) {
    const { tourId, guiaId, idiomaId , ...salidaDetails } = updateSalidaDto;

    const salida = await this.findOne(id);

    const tourSalida = await this.tourRepository.findOneBy({ id: tourId});
      if( !tourSalida )
        throw new BadRequestException(`No existe ningun tour con el id ${tourId}`);

    const guiaSalida = await this.guiaRepository.findOneBy({ id: guiaId});
    if( !guiaSalida )
      throw new BadRequestException(`No existe ningun guia con el id ${guiaId}`);

    const idiomaSalida = await this.idiomaRepository.findOneBy({ id: idiomaId});
    if( !idiomaSalida )
      throw new BadRequestException(`No existe ningun idioma con el id ${idiomaId}`);

    const dataModificada = {
      ...salidaDetails,
      tour: tourSalida,
      guia: guiaSalida,
      idioma: idiomaSalida
    }
      
    await this.salidaRepository.update(id = id, dataModificada);
    return await this.findOne( id );
  }

  async remove(id: number) {
    const salida = await this.findOne(id);
    await this.salidaRepository.remove( salida );

    if ( salida ) 
      return {
        msg: `La salida con el id ${id} se ha eliminado correctamente.`
      };
  }


  private handleDBExceptions( error: any ) {
    if ( error.sqlState === '23000' )
      throw new BadRequestException(error.sqlMessage);
    
    if(error.status === 400)
      throw new BadRequestException(error.message);
    
    this.logger.error(error);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
