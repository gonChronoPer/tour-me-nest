import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class PaisesService {

  private readonly logger = new Logger('PaisesService');
  
  constructor( 
    @InjectRepository(Pais)
    private readonly paisRepository: Repository<Pais>,
  ){}

  async create(createPaisDto: CreatePaisDto) {
    try {
      const pais = createPaisDto;

      const product = this.paisRepository.create( pais );
      await this.paisRepository.save( pais );

      return pais;
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const paises = await this.paisRepository.find({
      take: limit,
      skip: offset
    });

    return paises;
  }

  async findOne(id: string) {
    const pais = await this.paisRepository.findOneBy({ id });

    if ( !pais ) 
      throw new NotFoundException(`Pais con id ${ id } no encontrado`);

    return pais;
  }

  async update(id: string, updatePaisDto: UpdatePaisDto) {
    try {
      await this.paisRepository.update(id = id, updatePaisDto );
      return await this.findOne( id );
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const pais = await this.findOne( id );
    await this.paisRepository.remove( pais );

    if ( pais ) 
      return {
        msg: `El pais con el id ${id} se ha eliminado correctamente.`
      };
  }


  private handleDBExceptions( error: any ) {

    if ( error.sqlState === '23000' )
      throw new BadRequestException(error.sqlMessage);

    this.logger.error(error);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
