import { IsString, MinLength } from "class-validator";

export class CreatePaisDto {

    @IsString()
    @MinLength(1)
    nombre: string;
}
