"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors(); // Enable Cross-Origin Resource Sharing (CORS)
    app.setGlobalPrefix('api'); // Apply a global prefix to all routes
    await app.listen(3000);
    console.log('Application is running on http://localhost:3000/api/graphql');
}
bootstrap();
