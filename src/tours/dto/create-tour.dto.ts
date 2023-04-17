import { IsNumber, IsOptional, IsPositive, IsString, IsUrl, MinLength } from "class-validator";

export class CreateTourDto {

    @IsString()
    @MinLength(5)
    nombre: string;

    @IsString()
    @MinLength(20)
    @IsOptional()
    descripcion: string;
    
    @IsString()
    @MinLength(10)
    puntoEncuentro: string;

    @IsNumber()
    @IsPositive()
    precio: number;
    
    @IsUrl()
    portadaPath?: string;

    @IsNumber()
    @IsPositive()
    ciudadId: number;
}
