import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

export interface IProductsService {
    create(createProductDto: CreateProductDto): Promise<Product>;
    list(): Promise<Product[]>;
    listByCategoryId(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product>;
    updateById(
        id: string,
        updateProductDto: UpdateProductDto,
    ): Promise<Product>;
    deleteById(id: string): Promise<any>;
}
