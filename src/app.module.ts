import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PasswordService } from 'src/auth/services/password.service';
import { UsersModule } from 'src/users/users.module';
import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AppService } from './app.service';
import { UsersController } from 'src/users/users.controller';
import { AppController } from './app.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, PostModule],
  providers: [
    UsersService,
    PrismaService,
    AppService,
    PasswordService,
    PostService,
  ],
  exports: [
    UsersService,
    PrismaService,
    AppService,
    PasswordService,
    PostService,
  ],
  controllers: [UsersController, AppController, PostController],
})
export class AppModule {}
