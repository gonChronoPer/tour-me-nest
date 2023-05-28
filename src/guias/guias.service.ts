import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Guia } from './entities/guia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GuiasService {
  
  private readonly logger = new Logger('GuiasService');

  constructor(
    @InjectRepository(Guia)
    private readonly guiaRepository: Repository<Guia>,
  ){}

  async create(createGuiaDto: CreateGuiaDto) {
    try {
      const { ...detalleGuia  } = createGuiaDto;
      
      const guia = this.guiaRepository.create(detalleGuia);
      await this.guiaRepository.save( guia );
      
      return guia;

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const guias = await this.guiaRepository.find({
      take: limit,
      skip: offset
    });

    return guias;
  }

  async findOne(id: number) {
    const guia = await this.guiaRepository.findOneBy({id});

    if ( !guia ) 
      throw new NotFoundException(`Guia con id ${ id } no encontrada`);

    return guia;
  }


  async findOneByMail(mail: string) {
    const guia = await this.guiaRepository.findOneBy({ email: mail });

    if ( !guia ) 
      throw new NotFoundException(`Guia con mail ${ mail } no encontrado`);

    return guia;
  }

  async update(id: number, updateGuiaDto: UpdateGuiaDto) {
    await this.guiaRepository.update(id = id, updateGuiaDto);
    return await this.findOne( id );
  }

  async remove(id: number) {
    const guia = await this.findOne(id);
    await this.guiaRepository.remove( guia );

    if ( guia ) 
      return {
        msg: `El/La guia con el id ${id} se ha eliminado correctamente.`
      };
  }

  private handleDBExceptions( error: any ) {
    if ( error.sqlState === '23000' )
      throw new BadRequestException(error.sqlMessage);
    
    this.logger.error(error);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
