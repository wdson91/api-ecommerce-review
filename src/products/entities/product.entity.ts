import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  Category,
  CategoryDocument,
} from 'src/categorys/entities/category.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  _id: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  })
  category: Category;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  imageUrl: string[];

  @Prop({ default: Date.now })
  createdAt?: Date;

  @Prop({ default: Date.now })
  updatedAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product)
  .pre('findOne', function (next) {
    this.populate('category');
    next();
  })
  .pre('find', function (next) {
    this.populate('category');
    next();
  });
