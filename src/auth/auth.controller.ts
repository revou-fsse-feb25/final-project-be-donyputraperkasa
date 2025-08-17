import { CreateUserDto } from '../users/dto/create-user.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiResponse({ status: 201, description: 'User successfully logged in.' })
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }

  @Post('register')
  @ApiResponse({ status: 201, description: 'User successfully registered.' })
  async register(@Body() body: CreateUserDto) {
    const result = await this.authService.register(body);
    return result;
  }
}