import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateTuristaDto } from './dto/create-turista.dto';
import { UpdateTuristaDto } from './dto/update-turista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Turista } from './entities/turista.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class TuristasService {
  
  private readonly logger = new Logger('TuristasService');

  constructor(
    @InjectRepository(Turista)
    private readonly turistaRepository: Repository<Turista>
  ) {}

  async create(createTuristaDto: CreateTuristaDto) {
    try {
      const { ...detalleTurista  } = createTuristaDto;
      
      const turista = this.turistaRepository.create(detalleTurista);
      await this.turistaRepository.save( turista );
      
      return turista;

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const turistas = await this.turistaRepository.find({
      take: limit,
      skip: offset
    });

    return turistas;
  }

  async findOne(id: number) {
    const turista = await this.turistaRepository.findOneBy({id});

    if ( !turista ) 
      throw new NotFoundException(`Turista con id ${ id } no encontrado`);

    return turista;
  }

  async findOneByMail(mail: string) {
    const guia = await this.turistaRepository.findOneBy({ email: mail });

    if ( !guia ) 
      throw new NotFoundException(`Turista con mail ${ mail } no encontrado`);

    return guia;
  }

  async update(id: number, updateTuristaDto: UpdateTuristaDto) {
    await this.turistaRepository.update(id = id, updateTuristaDto);
    return await this.findOne( id );
  }

  async remove(id: number) {
    const turista = await this.findOne(id);
    await this.turistaRepository.remove( turista );

    if ( turista ) 
      return {
        msg: `El/La turista con el id ${id} se ha eliminado correctamente.`
      };
  }


  private handleDBExceptions( error: any ) {
    if ( error.sqlState === '23000' )
      throw new BadRequestException(error.sqlMessage);
    
    this.logger.error(error);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
