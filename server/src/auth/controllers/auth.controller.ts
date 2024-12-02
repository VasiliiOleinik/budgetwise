import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../services/auth.service';
import { UsersService } from 'src/users/services/users.service';
import { UserDocument } from 'src/users/schemas/user.schema';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const { email, password } = body;

    if (!email || !password) {
      return { message: 'Invalid credentials' };
    }

    // Find user by email
    const user: UserDocument = await this.usersService.findByEmail(email);
    if (!user) {
      return { message: 'Invalid credentials' };
    }

   // Check if the password is valid
    const isPasswordValid = await this.usersService.validatePassword(password, user.password);
    if (!isPasswordValid) {
      return { message: 'Invalid credentials' };
    }

   // Generate token
    const token = await this.authService.generateToken({ userId: user._id, email: user.email });

   // Set cookie with token
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });

    return { message: 'Login successful' };
  }
}
