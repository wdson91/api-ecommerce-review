import { Module } from '@nestjs/common';
import { UsersService } from './repositories/implementations/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { CreateUserUseCase } from './usecases/createUser/create-user.usecase';
import { CreateUserController } from 'src/users/usecases/createUser/create-user.controller';
import { ListUserController } from 'src/users/usecases/listUser/list-user.controller';
import { ListUsersUseCase } from 'src/users/usecases/listUser/list-user.usecase';
import { FindUserByIdController } from './usecases/findById/findById-user.controller';
import { FindUserByIdUseCase } from './usecases/findById/findById-user.usecase';
import { UpdateUserController } from './usecases/updateUser/update-user.controller';
import { UpdateUserUseCase } from './usecases/updateUser/update-user.usecase';
import { DeleteUserByIdController } from './usecases/deleteUser/delete-user.controller';
import { DeleteUserByIdUseCase } from './usecases/deleteUser/delete-user.usecase';
import { AuthenticateUserController } from './usecases/authenticateUser/authenticate-user.controller';
import { AuthenticateUserUseCase } from './usecases/authenticateUser/authenticate-user.usecase';
import { DayjsProvider } from 'src/shared/providers/DateProvider/implementations/dayjs-date.provider';
import { RefreshTokenService } from './repositories/implementations/refresh-token.service';
import {
  RefreshToken,
  RefreshTokenchema,
} from './entities/refresh-token.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: RefreshToken.name, schema: RefreshTokenchema },
    ]),
  ],
  controllers: [
    CreateUserController,
    ListUserController,
    FindUserByIdController,
    UpdateUserController,
    DeleteUserByIdController,
    AuthenticateUserController,
  ],
  providers: [
    UsersService,
    CreateUserUseCase,
    ListUsersUseCase,
    FindUserByIdUseCase,
    UpdateUserUseCase,
    DeleteUserByIdUseCase,
    AuthenticateUserUseCase,
    DayjsProvider,
    RefreshTokenService,
  ],
})
export class UsersModule { }
