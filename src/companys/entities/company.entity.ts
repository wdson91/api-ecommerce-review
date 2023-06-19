import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
    @Prop({ default: new mongoose.Types.ObjectId() })
    _id?: string;

    @Prop()
    name: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop({ default: Date.now })
    createdAt?: Date;

    @Prop({ default: Date.now })
    updatedAt?: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
