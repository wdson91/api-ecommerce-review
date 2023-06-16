import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.usecase';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('/api/users')
export class CreateUserController {
    constructor(
        @Inject(CreateUserUseCase)
        private readonly createUserUseCase: CreateUserUseCase,
    ) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.createUserUseCase.execute(createUserDto);
    }
}
