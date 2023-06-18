import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateCompanyDto } from 'src/companys/dto/create-company.dto';
import { CreateCompanyUseCase } from './create-company.usecases';



@Controller('/api/companys')
export class CreateCompanyController {
    constructor(
        @Inject(CreateCompanyUseCase)
        private readonly createCompanyUseCase: CreateCompanyUseCase,
    ) { }

    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.createCompanyUseCase.execute(createCompanyDto);
    }
}
