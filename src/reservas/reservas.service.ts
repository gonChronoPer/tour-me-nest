import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Salida } from 'src/salidas/entities/salida.entity';
import { Turista } from 'src/turistas/entities/turista.entity';

@Injectable()
export class ReservasService {
  
  private readonly logger = new Logger('ReservasService');
  
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,

    @InjectRepository(Salida)
    private readonly salidaRepository: Repository<Salida>,

    @InjectRepository(Turista)
    private readonly turistaRepository: Repository<Turista>,
  ){}

  async create(createReservaDto: CreateReservaDto) {
    try {
      const { salidaId, turistaId, ...reservaDetails } = createReservaDto;

      const salidaReserva = await this.salidaRepository.findOneBy({ id: salidaId});
      if( !salidaReserva )
        throw new BadRequestException(`No existe ninguna salida con el id ${salidaId}`);

      const turistaReserva = await this.turistaRepository.findOneBy({ id: turistaId});
      if( !turistaReserva )
        throw new BadRequestException(`No existe ningun turista con el id ${turistaId}`);
      
      console.log(salidaReserva.fechaHora);

      const reserva = this.reservaRepository.create({
        ...reservaDetails,
        salida: salidaReserva,
        turista: turistaReserva
      });

      reserva.codigo = Math.floor(Math.random() * 999999);
      
      await this.salidaRepository.save( reserva );

      return reserva;
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll( paginationDto: PaginationDto ) {
    const { limit = 10, offset = 0 } = paginationDto;

    const reservas = await this.reservaRepository.find({
      take: limit,
      skip: offset,
      relations: {
        salida: true,
        turista: true
      }
    });

    return reservas;
  }

  async findOne(id: number) {
    const reserva = await this.reservaRepository.findOne({
      where: { id: id },
      relations: ['salida', 'turista']
    });

    if ( !reserva ) 
      throw new NotFoundException(`Reserva con id ${ id } no encontrado`);

    return reserva;
  }

  update(id: number, updateReservaDto: UpdateReservaDto) {
    return `This action updates a #${id} reserva`;
  }

  async remove(id: number) {
    const reserva = await this.findOne(id);
    await this.reservaRepository.remove( reserva );

    if ( reserva ) 
      return {
        msg: `La reserva con el id ${id} se ha eliminado correctamente.`
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
