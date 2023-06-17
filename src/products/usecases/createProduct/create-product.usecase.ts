import { Injectable } from '@nestjs/common';
import { AppError } from 'src/shared/errors/AppError';
import { hash } from 'bcrypt';

import { ensurePassword } from 'src/ensures/ensurePassword';
import { ensureName } from 'src/ensures/ensureName';
import { ProductsService } from 'src/products/repositories/implementations/products.service';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { Product } from 'src/products/entities/product.entity';
import { ensureDecription } from 'src/ensures/ensureDescription';
import { ensureQuantity } from 'src/ensures/ensureQuantity';
import { ensurePrice } from 'src/ensures/ensurePrice';
import { CategorysService } from 'src/categorys/repositories/implementations/categorys.service';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categorysService: CategorysService,
  ) {}

  async execute({
    category,
    description,
    imageUrl,
    name,
    price,
    quantity,
  }: CreateProductDto): Promise<Product> {
    console.log(category);
    if (!ensureName(name)) {
      throw new AppError('Name is not available', 401);
    }

    const productsExists = await this.productsService.findByName(name);

    if (productsExists) {
      throw new AppError('Product already exists', 401);
    }

    const categoryExists = await this.categorysService.findById(category._id);

    if (!categoryExists) {
      throw new AppError('Category already exists', 401);
    }

    if (!ensureQuantity(quantity)) {
      throw new AppError('Quantity is not valid', 401);
    }

    if (!ensureDecription(description)) {
      throw new AppError('Description is not available', 401);
    }

    if (!ensurePrice(price)) {
      throw new AppError('Price unit is not valid', 401);
    }
    const product = await this.productsService.create({
      idCategory: category._id,
      category,
      description,
      imageUrl,
      name,
      price,
      quantity,
    });

    return product;
  }
}
