import { Module } from '@nestjs/common';
import { CompanysService } from './repositories/implementations/companys.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './entities/company.entity';
import { CreateCompanyController } from './usecases/createCompany/create-company.controller';
import { ListCompanyController } from './usecases/listCompany/list-company.controller';
import { CreateCompanyUseCase } from './usecases/createCompany/create-company.usecases';
import { ListCompanysUseCase } from './usecases/listCompany/list-company.usecases';
import { FindCompanyByIdController } from './usecases/findById/findById-company.controller';
import { FindCompanyByIdUseCase } from './usecases/findById/findById-company.usecase';
import { UpdateCompanyUseCase } from './usecases/updateCompany/update-company.usescase';
import { UpdateCompanyController } from './usecases/updateCompany/update-company.controller';
import { DeleteCompanyByIdUseCase } from './usecases/deleteCompany/delete-company.usecase';
import { DeleteCompanyController } from './usecases/deleteCompany/delete-company.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Company.name, schema: CompanySchema },
    ]),
  ],
  controllers: [ListCompanyController, CreateCompanyController, FindCompanyByIdController, UpdateCompanyController, DeleteCompanyController],
  providers: [CompanysService,
    CreateCompanyUseCase,
    ListCompanysUseCase, FindCompanyByIdUseCase, UpdateCompanyUseCase, DeleteCompanyByIdUseCase]
})
export class CompanysModule { }
