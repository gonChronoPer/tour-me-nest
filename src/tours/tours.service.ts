import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
import { Repository } from 'typeorm';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';

@Injectable()
export class ToursService {

  private readonly logger = new Logger('ToursService');

  constructor(
    @InjectRepository(Tour)
    private readonly tourRepository: Repository<Tour>,

    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>
  ){}


  async create(createTourDto: CreateTourDto) {
    try {
      const { ciudadId, ...tourDetails } = createTourDto;

      const ciudadTour = await this.ciudadRepository.findOneBy({ id: ciudadId});

      if( !ciudadTour )
        throw new BadRequestException(`No existe ninguna ciudad con el id ${ciudadId}`);
      
      const tour = this.tourRepository.create({
        ...tourDetails,
        ciudad: ciudadTour
      });
      
      await this.tourRepository.save( tour );

      return tour;
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const turistas = await this.tourRepository.find({
      take: limit,
      skip: offset,
      relations: {
        ciudad: {
          pais: true
        }
      }
    });

    return turistas;
  }

  async findOne(id: number) {
    const tour = await this.tourRepository.findOne({
      where: { id: id },
      relations: [
        'ciudad',
        'ciudad.pais'
      ]
    });

    if ( !tour ) 
      throw new NotFoundException(`Tour con id ${ id } no encontrado`);

    return tour;
  }

  async update(id: number, updateTourDto: UpdateTourDto) {
    const { ciudadId, ...tourDetails } = updateTourDto;

    const tour = await this.findOne(id);

    const ciudadTour = await this.ciudadRepository.findOneBy({ id: ciudadId});
    if( !ciudadTour )
      throw new BadRequestException(`No existe ninguna ciudad con el id ${ciudadId}`);

    const dataModificada = {
      ...tourDetails,
      ciudad: ciudadTour
    }
      
    await this.tourRepository.update(id = id, dataModificada);
    return await this.findOne( id );
  }

  async remove(id: number) {
    const tour = await this.findOne(id);
    await this.tourRepository.remove( tour );

    if ( tour ) 
      return {
        msg: `El tour con el id ${id} se ha eliminado correctamente.`
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
