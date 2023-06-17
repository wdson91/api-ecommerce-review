import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateProductUseCase } from './create-product.usecase';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

@Controller('/api/products')
export class CreateProductController {
  constructor(
    @Inject(CreateProductUseCase)
    private readonly createProductUseCase: CreateProductUseCase,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductUseCase.execute(createProductDto);
  }
}
