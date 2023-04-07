import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Mongoose from 'mongoose';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ChatsGateway } from './chats/chats.gateway';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      //디비 연결하기 및 설정하기
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ChatsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    // nest g middleware logger
    consumer.apply(LoggerMiddleware).forRoutes('*');
    Mongoose.set('debug', this.isDev);
  }
}
