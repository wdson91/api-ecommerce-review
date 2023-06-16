import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kaiodev:lhRVfik7l5h1x5pw@4codesolutions.0yggdea.mongodb.net/DinnerDelivery?retryWrites=true&w=majority',
    ),
    UsersModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
