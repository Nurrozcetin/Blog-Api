import { JwtAuthGuard } from './auth/guards/jwt-auth.guards';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth/services/auth.service';

@Controller('/auth')
export class AppController {
  [x: string]: any;
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/protected')
  Protect(@Request() req) {
    return {
      message: 'This  route is protected, but this user has access',
      user: req.user,
    };
  }
}
