import { Category } from 'src/categorys/entities/category.entity';

export class CreateProductDto {
  _id?: string;
  idCategory: string;
  category: Category;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string[];
}
