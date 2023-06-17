import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../entities/category.entity';

export interface ICategorysService {
  create(createCategoryDto: CreateCategoryDto): Promise<Category>;
  list(): Promise<Category[]>;
  findById(id: string): Promise<Category>;
  findByName(name: string): Promise<Category>;
  updateById(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category>;
  deleteById(id: string): Promise<any>;
}
