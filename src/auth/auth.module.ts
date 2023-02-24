import { AppModule } from './../app.module';
import { PasswordService } from './services/password.service';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    forwardRef(() => UsersModule),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, PasswordService],
  exports: [AuthService, PasswordService],
})
export class AuthModule {}
