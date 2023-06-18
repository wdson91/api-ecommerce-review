import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
    @Prop()
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
