import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { userInfo } from 'os';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UsersService {
  findUnique() {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: { ...createUserDto },
    });
  }

  async findAll() {
    console.log('Returns all user');
    return await this.prisma.user.findMany({});
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async delete(id: number) {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
