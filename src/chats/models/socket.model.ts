import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty, IsString } from 'class-validator';

const options: SchemaOptions = {
  id: false, // 몽구스가 생성하는 _id를 직접 만드는 id 와 별개로 인식하도록 false로 설정
  collection: 'sockets',
  timestamps: true,
};

@Schema(options)
export class Socket extends Document {
  @Prop({
    unique: true,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  username: string;
}

export const socketSchema = SchemaFactory.createForClass(Socket);
