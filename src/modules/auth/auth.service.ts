import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService, 
                @InjectRepository(User) private userRepository: Repository<User>){}

    async funRegister(objUser: RegisterAuthDto){
        const {password}=objUser

        const plainToHash=await hash(password, 12) //para encriptar la contraseña lo importamos manualmente


        objUser={...objUser, password:plainToHash} 


        return this.userRepository.save(objUser) //para guardar en la BDD
    }


    async login(credenciales: LoginAuthDto){

        const {email,password}=credenciales 
        const user=await this.userRepository.findOne({
            where:{
                mail: email
            }
        })

        //si no existe el usuario lanzamos una excepcion
        if(!user)  return new HttpException('Usuario no encontrado',404 );

        const verificarPass = await compare(password, user.password) //compare lo importamos manualmente

        if(!verificarPass) throw new HttpException('Password invalido', 401)

        let payload={email:user.mail, id:user.id}  
        const token= this.jwtService.sign(payload)
        return {user:user, token:token};

    }
}
