import { Injectable } from '@nestjs/common';
import { CategorysService } from 'src/categorys/repositories/implementations/categorys.service';
import { ensureId } from 'src/ensures/ensureId';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/repositories/implementations/products.service';
import { AppError } from 'src/shared/errors/AppError';

@Injectable()
export class FindProductByIdUseCase {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categorysService: CategorysService,
  ) {}

  async execute(id: string): Promise<Product> {
    if (!ensureId(id)) {
      throw new AppError('Product not found', 401);
    }
    const checkProductExists = await this.productsService.findById(id);

    if (!checkProductExists) {
      throw new AppError('Product not found', 404);
    }

    return checkProductExists;
  }
}
