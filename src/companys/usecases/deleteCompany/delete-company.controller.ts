import { Delete, Param, Inject, Controller } from '@nestjs/common';
import { DeleteCompanyByIdUseCase } from './delete-company.usecase';




@Controller('/api/companys/:id')
export class DeleteCompanyController {
    constructor(
        @Inject(DeleteCompanyByIdUseCase)
        private readonly deleteCompanyUseCase: DeleteCompanyByIdUseCase,
    ) { }

    @Delete()
    delete(@Param('id') id: string) {
        return this.deleteCompanyUseCase.execute(id);
    }
}