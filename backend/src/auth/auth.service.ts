import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly validUsername = 'oba';
  private readonly validPassword = 'oba';

  constructor(private jwtService: JwtService) {}

  validateUser(username: string, password: string): boolean {
    return username === this.validUsername && password === this.validPassword;
  }

  login(username: string, password: string): { token: string } {
    if (!this.validateUser(username, password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username };
    const token = this.jwtService.sign(payload);
    return { token };
  }
}