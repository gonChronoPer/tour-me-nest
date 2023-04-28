import { IsBoolean, IsNumber, IsPositive } from "class-validator";

export class CheckinReservaDto {

    @IsNumber()
    @IsPositive()
    codigo: number;
}
