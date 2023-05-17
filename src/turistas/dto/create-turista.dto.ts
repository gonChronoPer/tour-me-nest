import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateTuristaDto {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsString()
    @MinLength(2)
    nombre: string;
    
    @IsString()
    @MinLength(2)
    apellidos: string;

    @IsString()
    @MinLength(6)
    telefono: string;
}
