import { Controller, Delete, Inject, Param } from '@nestjs/common';
import { DeleteUserByIdUseCase } from './delete-user.usecase';

@Controller('/api/users/:id')
export class DeleteUserByIdController {
    constructor(
        @Inject(DeleteUserByIdUseCase)
        private readonly deleteUserByIdUseCase: DeleteUserByIdUseCase,
    ) {}

    @Delete()
    deleteById(@Param('id') id: string) {
        return this.deleteUserByIdUseCase.execute(id);
    }
}
