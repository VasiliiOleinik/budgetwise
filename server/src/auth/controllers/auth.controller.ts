import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../services/auth.service';
import { UsersService } from 'src/users/services/users.service';
import { UserDocument } from 'src/users/schemas/user.schema';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  // @Post('login')
  // signin(@Body() loginDto: LoginDto) {
  // return this.authService.login(loginDto);
  // }

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const { email, password } = body;

    if (!email || !password) {
      res.status(400).send({ message: 'Invalid credentials' });
      return;
    }

    // Find user by email
    const user: UserDocument = await this.usersService.findByEmail(email);
    if (!user) {
      res.status(400).send({ message: 'Invalid credentials' });
      return;
    }

    // Check if the password is valid
    const isPasswordValid = await this.usersService.validatePassword(password, user.password);
    if (!isPasswordValid) {
      res.status(400).send({ message: 'Invalid credentials' });
      return;
    }

    // Generate token
    const token = await this.authService.generateToken({ userId: user._id, email: user.email, name: user.name });
    console.log('Login token', token);

    // Set cookie with token
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    res.cookie('auth_token', token, {
      httpOnly: false,       // Cannot be accessed via JavaScript
      secure: false,        // Works only in HTTPS
      sameSite: 'lax',      // Applies to cross-domain requests
      expires,  // Cookie lifespan is 1 day
    });

    console.log('All headers before response:', res.getHeaders());

    res.status(200).send({ message: 'Login successful' });
  }
}