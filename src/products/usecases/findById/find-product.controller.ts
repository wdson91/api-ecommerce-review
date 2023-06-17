import { Controller, Get, Inject, Param } from '@nestjs/common';
import { FindProductByIdUseCase } from './find-product.usecase';

@Controller('/api/products/:id')
export class FindProductByIdController {
  constructor(
    @Inject(FindProductByIdUseCase)
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
  ) {}

  @Get()
  findById(@Param('id') id: string) {
    return this.findProductByIdUseCase.execute(id);
  }
}
