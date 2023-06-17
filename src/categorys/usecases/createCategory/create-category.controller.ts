import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateCategoryUseCase } from './create-category.usecases';
import { CreateCategoryDto } from 'src/categorys/dto/create-category.dto';

@Controller('/api/categorys')
export class CreateCategoryController {
  constructor(
    @Inject(CreateCategoryUseCase)
    private readonly createCategoryUseCase: CreateCategoryUseCase,
  ) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.createCategoryUseCase.execute(createCategoryDto);
  }
}
