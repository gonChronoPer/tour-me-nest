import { PartialType } from '@nestjs/mapped-types';
import { CreateCiudadeDto } from './create-ciudad.dto';

export class UpdateCiudadeDto extends PartialType(CreateCiudadeDto) {}
