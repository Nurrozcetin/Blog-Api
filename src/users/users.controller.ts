import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entity/user.entity';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersservice: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersservice.create(createUserDto);
  }

  @Get()
  findall(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
    return this.usersservice.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const getUser = await this.usersservice.findOne(id);
    if (getUser == null) {
      return 'User not found';
    } else {
      return getUser;
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deleteUser = await this.usersservice.delete(id);
    return deleteUser;
  }
}