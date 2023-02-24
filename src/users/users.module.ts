import { AuthModule } from 'src/auth/auth.module';
import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  providers: [UsersService, PrismaService],
  exports: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
