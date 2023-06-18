import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from 'src/companys/dto/update-company.dto';
import { Company } from 'src/companys/entities/company.entity';
import { CompanysService } from 'src/companys/repositories/implementations/companys.service';
import { ensureName } from 'src/ensures/ensureName';
import { AppError } from 'src/shared/errors/AppError';




@Injectable()
export class UpdateCompanyUseCase {

    constructor(private readonly companysService: CompanysService) { }

    async execute(id: string, { name, phone, address }: UpdateCompanyDto): Promise<Company> {


        if (!ensureName(name)) {
            throw new AppError("Name is not available", 401);
        }
        if (!ensureName(address)) {
            throw new AppError("Address is not available", 401);
        }
        if (!ensureName(phone)) {
            throw new AppError("Phone is not available", 401);
        }

        const checkCompanyExists = await this.companysService.findById(id);

        if (!checkCompanyExists) {
            throw new AppError("Company not found", 404);
        }

        const checkCompanyExistsName = await this.companysService.findByName(name);

        if (checkCompanyExistsName) {
            if (checkCompanyExistsName.name !== checkCompanyExists.name) {
                throw new AppError("Company already exists", 401);
            }
        }
        const company = await this.companysService.updateById(id, {
            name,
            phone,
            address
        });

        return company;


    }
}
