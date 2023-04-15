import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Repository } from 'typeorm';
import { Idioma } from './entities/idioma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class IdiomasService {

  private readonly logger = new Logger('IdiomasService');

  constructor(
    @InjectRepository(Idioma)
    private readonly idiomaRepository: Repository<Idioma>,
  ) {}

  async create(createIdiomaDto: CreateIdiomaDto) {
    try {
      const idioma = createIdiomaDto;

      const product = this.idiomaRepository.create( idioma );
      await this.idiomaRepository.save( idioma );

      return idioma;
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const idiomas = await this.idiomaRepository.find({
      take: limit,
      skip: offset
    });

    return idiomas;
  }

  async findOne(id: string) {
    const idioma = await this.idiomaRepository.findOneBy({ id });

    if ( !idioma ) 
      throw new NotFoundException(`Idioma con id ${ id } no encontrado`);

    return idioma;
  }

  async update(id: string, updateIdiomaDto: UpdateIdiomaDto) {
    try {
      await this.idiomaRepository.update(id = id, updateIdiomaDto );
      return await this.findOne( id );
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const idioma = await this.findOne( id );
    await this.idiomaRepository.remove( idioma );

    if ( idioma ) 
      return {
        msg: `El idioma con el id ${id} se ha eliminado correctamente.`
      };
  }

  private handleDBExceptions( error: any ) {

    if ( error.sqlState === '23000' )
      throw new BadRequestException(error.sqlMessage);

    this.logger.error(error);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
