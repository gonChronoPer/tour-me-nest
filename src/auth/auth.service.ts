import { BadRequestException, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

  constructor(

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData} = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });

      await this.userRepository.save( user );
      delete user.password;

      return {
        ...user,
        token: this.getJwtToken({ id: user.id})
      };

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }


  async login(loginUserDto: LoginUserDto) {
    const {password, email } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true , isActive: true, id: true}
    });

    if( !user )
      throw new UnauthorizedException('Email y/o Contrasena invalidos');

    if( !user.isActive )
      throw new UnauthorizedException('Email y/o Contrasena invalidos');
    
    if( !bcrypt.compareSync( password, user.password ) )
      throw new UnauthorizedException('Email y/o Contrasena invalidos');
    
    delete user.password;
    delete user.isActive;
    
    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    }; 
  }


  private getJwtToken( payload: JwtPayload ) {
    
    const token = this.jwtService.sign( payload );
    return token;
  }

  private handleDBExceptions( error: any ) {

    if ( error.sqlState === '23000' )
      throw new BadRequestException(error.sqlMessage);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
