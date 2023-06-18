import { Injectable } from "@nestjs/common";
import { CreateCompanyDto } from "src/companys/dto/create-company.dto";
import { Company } from "src/companys/entities/company.entity";
import { CompanysService } from "src/companys/repositories/implementations/companys.service";

import { ensureName } from "src/ensures/ensureName";
import { AppError } from "src/shared/errors/AppError";




@Injectable()
export class CreateCompanyUseCase {
    constructor(private readonly companysService: CompanysService) { }

    async execute({ name, phone, address }: CreateCompanyDto): Promise<Company> {
        if (!ensureName(name)) {
            throw new AppError('Name is not available', 401);
        }

        const companyExists = await this.companysService.findByName(name);

        if (companyExists) {
            throw new AppError('Company already exists', 401);
        }



        const company = await this.companysService.create({

            name,
            phone,
            address,
        });

        return company;
    }
}