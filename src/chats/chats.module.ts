import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatsGateway } from './chats.gateway';
import { Chatting, ChattingSchema } from './models/chattings.model';
import { Socket as SocketModel, socketSchema } from './models/socket.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chatting.name, schema: ChattingSchema },
      { name: SocketModel.name, schema: socketSchema },
    ]),
  ],
  providers: [ChatsGateway],
})
export class ChatsModule {}
