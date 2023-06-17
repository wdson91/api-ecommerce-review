import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../dto/create-category.dto';
import { UpdateCategoryDto } from '../../dto/update-category.dto';
import { Category } from 'src/categorys/entities/category.entity';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICategorysService } from '../service-categorys.interface';

@Injectable()
export class CategorysService implements ICategorysService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new this.categoryModel({
      _id: new mongoose.Types.ObjectId(),
      name: createCategoryDto.name,
      description: createCategoryDto.description,
    });

    return category.save();
  }
  async list(): Promise<Category[]> {
    return this.categoryModel.find();
  }
  async findById(id: string): Promise<Category> {
    return this.categoryModel.findById({ _id: id });
  }
  async findByName(name: string): Promise<Category> {
    return this.categoryModel.findOne({ name });
  }
  async updateById(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateCategoryDto },
      { new: true },
    );
  }
  async deleteById(id: string): Promise<any> {
    return this.categoryModel.deleteOne({ _id: id }).exec();
  }
}
