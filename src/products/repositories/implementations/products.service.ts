import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { Product } from 'src/products/entities/product.entity';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProductsService } from '../service-products.interface';

@Injectable()
export class ProductsService implements IProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
    ) {}
    async create({
        category,
        description,
        name,
        imageUrl,
        quantity,
        price,
    }: CreateProductDto): Promise<Product> {
        const product = new this.productModel({
            _id: new mongoose.Types.ObjectId(),
            category,
            description,
            name,
            imageUrl,
            quantity,
            price,
        });

        await product.populate('category', category);

        return product.save();
    }
    async list(): Promise<Product[]> {
        return this.productModel.find();
    }
    async listByCategoryId(): Promise<Product[]> {
        throw new Error('Method not implemented.');
    }
    async findById(id: string): Promise<Product> {
        return this.productModel.findById({ _id: id });
    }
    async findByName(name: string): Promise<Product> {
        return this.productModel.findOne({ name });
    }
    async updateById(
        id: string,
        updateProductDto: UpdateProductDto,
    ): Promise<Product> {
        return this.productModel.findByIdAndUpdate(
            { _id: id },
            { $set: updateProductDto },
            { new: true },
        );
    }
    async deleteById(id: string): Promise<any> {
        return this.productModel.deleteOne({ _id: id }).exec();
    }
}
