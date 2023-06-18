import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategorysModule } from './categorys/categorys.module';
import { CompanysModule } from './companys/companys.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://apits:bGsHrxvVc2x1BRvD@cluster0.kafqu2p.mongodb.net/Ecommerce?retryWrites=true&w=majority',
    ),
    UsersModule,
    ProductsModule,
    CategorysModule,
    CompanysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
