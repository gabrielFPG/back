import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateVehiculoDto {

    @IsString()
    @IsNotEmpty()
    nombreVehiculo: string;

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsInt()
    @IsNotEmpty()
    categoria: number;
}
