import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
  .setTitle('Trucking Backend')
  .setDescription('The trucking API description')
  .setVersion('0.1')
  .addBearerAuth()
  .build();
  
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  
  await app.listen(3000);
}
bootstrap();
