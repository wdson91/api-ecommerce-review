import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RefreshTokenDocument = HydratedDocument<RefreshToken>;

@Schema()
export class RefreshToken {
  @Prop()
  refreshToken: string;

  @Prop()
  expireDate: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const RefreshTokenchema = SchemaFactory.createForClass(RefreshToken);
