import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { UpdateUserUseCase } from './update-user.usecase';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('/api/users/:id')
export class UpdateUserController {
    constructor(
        @Inject(UpdateUserUseCase)
        private readonly updateUserUseCase: UpdateUserUseCase,
    ) {}

    @Put()
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.updateUserUseCase.execute(id, updateUserDto);
    }
}
