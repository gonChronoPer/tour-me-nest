import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCiudadeDto } from './dto/create-ciudad.dto';
import { UpdateCiudadeDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';


@Injectable()
export class CiudadesService {

  private readonly logger = new Logger('CiudadesService');

  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,

  ) {}

  async create(createCiudadeDto: CreateCiudadeDto) {
    try {
      const ciudadDetails = createCiudadeDto;

      const ciudad = this.ciudadRepository.create(ciudadDetails);

      await this.ciudadRepository.save( ciudad );

      return ciudad;
      
    } catch (error) {
      if(error.status === 400)
        throw new BadRequestException(error.message);
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const ciudades = await this.ciudadRepository.find({
      take: limit,
      skip: offset,
    });

    return ciudades;
  }

  async findOne(id: number) {
    const ciudad = await this.ciudadRepository.findOne({
      where: { id: id }
    });

    if ( !ciudad ) 
      throw new NotFoundException(`Ciudad con id ${ id } no encontrada`);

    return ciudad;
  }

  async update(id: number, updateCiudadeDto: UpdateCiudadeDto) {

    const ciudadDetails = updateCiudadeDto;

    const ciudad = await this.findOne( id );
    if( !ciudad )
      throw new BadRequestException(`No existe ninguna ciudad con el id ${id}`);

    const dataModificada = ciudadDetails;
      
    await this.ciudadRepository.update(id = id, dataModificada);
    return await this.findOne( id );
  }

  async remove(id: number) {
    const ciudad = await this.findOne(id);
    await this.ciudadRepository.remove( ciudad );

    if ( ciudad ) 
      return {
        msg: `La ciudad con el id ${id} se ha eliminado correctamente.`
      };
  }

  private handleDBExceptions( error: any ) {

    if ( error.sqlState === '23000' )
      throw new BadRequestException(error.sqlMessage);
    
    this.logger.error(error);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
