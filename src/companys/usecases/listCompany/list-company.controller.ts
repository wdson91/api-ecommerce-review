import { Controller, Get, Inject } from '@nestjs/common';

import { ListCompanysUseCase } from './list-company.usecases';



@Controller('/api/companys')
export class ListCompanyController {
    constructor(
        @Inject(ListCompanysUseCase)
        private readonly listCompanysUseCase: ListCompanysUseCase,
    ) { }

    @Get()
    list() {
        return this.listCompanysUseCase.execute();
    }
}
