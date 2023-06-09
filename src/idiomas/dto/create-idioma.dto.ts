import { IsString, MinLength } from "class-validator";

export class CreateIdiomaDto {

    @IsString()
    @MinLength(1)
    nombre: string;
}
