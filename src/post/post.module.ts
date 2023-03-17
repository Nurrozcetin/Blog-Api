import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
  exports: [PostService, PrismaService],
  imports: [PrismaModule],
})
export class PostModule {}
