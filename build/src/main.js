"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_option_1 = require("./options/swagger.option");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.setGlobalPrefix('/api');
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swagger_option_1.swaggerConfig);
    swagger_1.SwaggerModule.setup('api/docs', app, swaggerDocument);
    await app.listen(configService.get('PORT'), () => {
        console.log('Web', configService.get('BASE_URL'));
    });
}
bootstrap();
//# sourceMappingURL=main.js.map