import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FindCompanyByIdUseCase } from "./findById-company.usecase";



@Controller('/api/companys/:id')
export class FindCompanyByIdController {
    constructor(
        @Inject(FindCompanyByIdUseCase)
        private readonly findCompanyByIdUseCase: FindCompanyByIdUseCase,
    ) { }

    @Get()
    findById(@Param('id') id: string) {
        return this.findCompanyByIdUseCase.execute(id);
    }
}