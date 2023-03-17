import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  /*async create(createPostDto: CreatePostDto) {
    return await this.prisma.posts.create({
      data: { ...createPostDto },
    });
  }*/

  async findAll() {
    return await this.prisma.posts.findMany({});
  }
}
