import { Controller, Get, Inject } from '@nestjs/common';
import { ListUsersUseCase } from './list-user.usecase';

@Controller('/api/users')
export class ListUserController {
    constructor(
        @Inject(ListUsersUseCase)
        private readonly listUserUseCase: ListUsersUseCase,
    ) {}

    @Get()
    list() {
        return this.listUserUseCase.execute();
    }
}
