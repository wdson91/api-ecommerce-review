import { Controller, Get, Inject, Param } from '@nestjs/common';
import { FindUserByIdUseCase } from './findById-user.usecase';

@Controller('/api/users/:id')
export class FindUserByIdController {
    constructor(
        @Inject(FindUserByIdUseCase)
        private readonly findUserByIdUseCase: FindUserByIdUseCase,
    ) {}

    @Get()
    findById(@Param('id') id: string) {
        return this.findUserByIdUseCase.execute(id);
    }
}
