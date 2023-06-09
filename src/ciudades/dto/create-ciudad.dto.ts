import { IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateCiudadeDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    portadaPath: string;
}
