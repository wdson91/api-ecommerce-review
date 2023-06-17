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
import { CreateCategoryDto } from 'src/categorys/dto/create-category.dto';
import { Category } from 'src/categorys/entities/category.entity';

@Injectable()
export class CreateCategoryUseCase {
  constructor(private readonly categorysService: CategorysService) {}

  async execute({ name, description }: CreateCategoryDto): Promise<Category> {
    if (!ensureName(name)) {
      throw new AppError('Name is not available', 401);
    }

    const categoryExists = await this.categorysService.findByName(name);

    if (categoryExists) {
      throw new AppError('Product already exists', 401);
    }

    if (!ensureDecription(description)) {
      throw new AppError('Description is not available', 401);
    }

    const category = await this.categorysService.create({
      description,
      name,
    });

    return category;
  }
}
