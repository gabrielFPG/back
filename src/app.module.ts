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
import { VehiculosModule } from './modules/vehiculos/vehiculos.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule, PersonaModule, RoleModule, VehiculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
