import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PersonaModule } from './modules/persona/persona.module';
import { RoleModule } from './modules/role/role.module';
import { MateriaModule } from './modules/materia/materia.module';
import { EstudianteModule } from './modules/estudiante/estudiante.module';
import { CursoModule } from './modules/curso/curso.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule, PersonaModule, RoleModule, MateriaModule, EstudianteModule, CursoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
