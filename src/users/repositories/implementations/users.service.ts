import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserService } from '../service-user.interface';

@Injectable()
export class UsersService implements IUserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);

    return user.save();
  }

  async list(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById({ _id: id });
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async updateById(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateUserDto },
      { new: true },
    );
  }

  async deleteById(id: string): Promise<any> {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
