import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { KnexModule } from 'nest-knexjs';
import knxConfig from '../knexfile';

@Module({
  imports: [
    KnexModule.forRoot({ config: knxConfig }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
