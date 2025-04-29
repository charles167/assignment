"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const department_module_1 = require("./departments/department.module");
const apollo_1 = require("@nestjs/apollo"); // Import ApolloDriver
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(), // Ensure you load env variables if any
            mongoose_1.MongooseModule.forRoot('mongodb+srv://charles:charles01@cluster0.mbofgcd.mongodb.net/nestjs-mongo'),
            // GraphQL setup with Apollo Driver
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver, // Specify the driver
                autoSchemaFile: true,
                playground: true, // Enable GraphQL Playground for testing queries
                path: '/api/graphql',
            }),
            // Custom modules
            auth_module_1.AuthModule,
            department_module_1.DepartmentModule,
        ],
    })
], AppModule);
