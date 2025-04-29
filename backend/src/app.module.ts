import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DepartmentModule } from './departments/department.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // Import ApolloDriver

@Module({
  imports: [
    ConfigModule.forRoot(), // Ensure you load env variables if any
    MongooseModule.forRoot('mongodb+srv://charles:charles01@cluster0.mbofgcd.mongodb.net/nestjs-mongo'),
  

    
    // GraphQL setup with Apollo Driver
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Specify the driver
      autoSchemaFile: true,
      playground: true, // Enable GraphQL Playground for testing queries
      path: '/api/graphql',
    }),

    // Custom modules
    AuthModule,
    DepartmentModule,
  ],
})
export class AppModule {}
