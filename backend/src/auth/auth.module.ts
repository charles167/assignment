import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [JwtModule.register({ secret: 'secretKey', signOptions: { expiresIn: '1h' } })],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}