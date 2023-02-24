import { PasswordService } from 'src/auth/services/password.service';
import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => PasswordService))
    private passwordService: PasswordService,
  ) {}

  async create(data: CreateUserDto) {
    const encryptedPassword = await this.passwordService.hashPassword(
      data.password,
    );
    const { password, ...user } = await this.prisma.user.create({
      data: {
        ...data,
        password: encryptedPassword,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<CreateUserDto | undefined> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async findAll() {
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
