import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public')); // javaScript 와 css 를 서빙해주는 경로
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 템플릿 엔진을 어디 파일에 설정한건지 설정하는 경로
  app.setViewEngine('hbs'); // hbs를 viewEngine으로 사용한다라고 지정하는 설정
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
}
bootstrap();
