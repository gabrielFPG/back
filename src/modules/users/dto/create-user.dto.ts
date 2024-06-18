import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator";



export class CreateUserDto {

    @ApiProperty({description:'Nombre de Usuario'})
    @IsString({message:'El nombre deben ser caracteres'})
    @IsNotEmpty({message:'El nombre no debe estar vacio'})
    name:string;

    @ApiProperty({description:'Correo Electronico'})
    @IsEmail({},{message:'El formato debe ser de correo'})
    @IsNotEmpty({message:'El correo no debe estar vacio'})
    mail:string;

    @ApiProperty({description:'Contraseña de Usuario'})
    @MinLength(6,{message:'La contraseña debe tener minimo 6 caracteres'})
    @IsString({message:'La contraseña debe ser una cadena'})
    password:string;

    @ApiProperty({description: 'Número de Teléfono'})
    @IsPhoneNumber(null, {message: 'El formato del teléfono no es válido'})
    @IsNotEmpty({message: 'El número de teléfono no debe estar vacio'})
    phone: string;

}
