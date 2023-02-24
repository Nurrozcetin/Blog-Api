import { UsersService } from 'src/users/users.service';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class PasswordService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}

  async hashPassword(password: string) {
    const salt = await genSalt(10);
    return hash(password, salt);
  }

  async comparePassword(
    provicedPass: string,
    storedPass: string,
  ): Promise<boolean> {
    return compare(provicedPass, storedPass);
  }
}
