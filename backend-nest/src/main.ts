import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('BuzzBrain API')
    .setDescription('API documentation for BuzzBrain application')
    .setVersion('1.0')
    .addTag('buzzbrain')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `Application is running on: localhost:${process.env.PORT ?? 3000}`,
  );
}
bootstrap();
