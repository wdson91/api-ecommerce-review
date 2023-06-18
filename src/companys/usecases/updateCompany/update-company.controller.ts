import { Controller, Inject, Put, Param, Body } from '@nestjs/common';
import { UpdateCompanyDto } from 'src/companys/dto/update-company.dto';
import { UpdateCompanyUseCase } from './update-company.usescase';



@Controller('api/companys/:id')
export class UpdateCompanyController {

    constructor(
        @Inject(UpdateCompanyUseCase)
        private readonly updateCompanyUseCase: UpdateCompanyUseCase,
    ) { }

    @Put()
    update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.updateCompanyUseCase.execute(id, updateCompanyDto);
    }
}