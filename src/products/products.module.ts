import { Module } from '@nestjs/common';
import { ProductsService } from './repositories/implementations/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { CreateProductController } from './usecases/createProduct/create-product.controller';
import { CreateProductUseCase } from './usecases/createProduct/create-product.usecase';
import { CategorysService } from 'src/categorys/repositories/implementations/categorys.service';
import {
  Category,
  CategorySchema,
} from 'src/categorys/entities/category.entity';
import { FindProductByIdController } from './usecases/findById/find-product.controller';
import { FindProductByIdUseCase } from './usecases/findById/find-product.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CreateProductController, FindProductByIdController],
  providers: [
    ProductsService,
    CreateProductUseCase,
    CategorysService,
    FindProductByIdUseCase,
  ],
})
export class ProductsModule {}
