import { LocalAuthGuard } from './authh/guards/local-auth.guard';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req) {
    return req.user;
  }
}
