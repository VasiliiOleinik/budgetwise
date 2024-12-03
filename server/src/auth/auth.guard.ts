import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Get token from cookies
    const token = request.cookies?.auth_token;

    if (!token) {
      throw new UnauthorizedException('Authentication token is missing');
    }

    try {
      // Verify token
      const payload = this.jwtService.verify(token);
      const user = await this.userService.findById(payload.userId);
      
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      request.user = {name: user.name, email: user.email, userId: user._id};
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
