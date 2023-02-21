import { UsersModule } from 'src/users/users.module';
import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AppService } from './app.service';
import { UsersController } from 'src/users/users.controller';
import { AppController } from './app.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule],
  providers: [UsersService, PrismaService, AppService],
  exports: [UsersService, PrismaService, AppService],
  controllers: [UsersController, AppController],
})
export class AppModule {}
