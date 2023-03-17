import { CreateUserDto } from './../users/dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { PostService } from './post.service';
import {
  Controller,
  Get,
  UseGuards,
  Request,
  Body,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Prisma } from '@prisma/client';

@Controller()
export class PostController {
  constructor(private postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/login/post')
  findAll(@Request() req) {
    return this.postService.findAll();
  }

  /*@UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }*/
}
