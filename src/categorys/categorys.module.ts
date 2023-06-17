import { Module } from '@nestjs/common';
import { CategorysService } from './repositories/implementations/categorys.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './entities/category.entity';
import { CreateCategoryUseCase } from './usecases/createCategory/create-category.usecases';
import { CreateCategoryController } from './usecases/createCategory/create-category.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CreateCategoryController],
  providers: [CategorysService, CreateCategoryUseCase],
})
export class CategorysModule {}
