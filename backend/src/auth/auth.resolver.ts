import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String) // Optionally, you could use a custom type for the response (see below)
  login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): string {
    return this.authService.login(username, password).token;
  }
}
