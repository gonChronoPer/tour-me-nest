import { IsDate, IsDateString, IsNumber, IsOptional, IsPositive } from "class-validator";

export class CreateSalidaDto {

    @IsDateString()
    fechaHora: Date;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    lugaresDisponibles: number;

    @IsNumber()
    @IsPositive()
    tourId: number;

    @IsNumber()
    @IsPositive()
    guiaId: number;

    @IsNumber()
    @IsPositive()
    idiomaId: number;
}
