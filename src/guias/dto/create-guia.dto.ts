import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateGuiaDto {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(2)
    nombre: string;
    
    @IsString()
    @MinLength(2)
    apellidos: string;

    @IsString()
    @MinLength(6)
    nroDocumento: string;

    @IsString()
    @MinLength(10)
    direccion: string;

    @IsString()
    @MinLength(6)
    telefono: string;
}
