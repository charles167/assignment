import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Enable Cross-Origin Resource Sharing (CORS)
  app.setGlobalPrefix('api'); // Apply a global prefix to all routes

  await app.listen(3000);
  console.log('Application is running on http://localhost:3000/api/graphql');
}
bootstrap();
