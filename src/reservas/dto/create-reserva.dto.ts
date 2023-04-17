import { IsBoolean, IsNumber, IsPositive } from "class-validator";

export class CreateReservaDto {

    @IsNumber()
    @IsPositive()
    lugaresReservados: number;

    @IsNumber()
    @IsPositive()
    salidaId: number;

    @IsNumber()
    @IsPositive()
    turistaId: number;
}
