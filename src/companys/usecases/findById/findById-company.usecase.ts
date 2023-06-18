import { Injectable } from "@nestjs/common";
import { ICompanyResponseDTO } from "src/companys/dto/response-user.dto";
import { CompanyMap } from "src/companys/mappers/company.map";

import { CompanysService } from "src/companys/repositories/implementations/companys.service";
import { ensureId } from "src/ensures/ensureId";
import { AppError } from "src/shared/errors/AppError";



@Injectable()
export class FindCompanyByIdUseCase {

    constructor(private readonly companysService: CompanysService) { }

    async execute(id: string) {
        if (!ensureId(id)) {
            throw new AppError("Id not found", 401);
        }
        const checkCompanyExists = (await this.companysService.findById(id)) as unknown as ICompanyResponseDTO;

        if (!checkCompanyExists) {
            throw new AppError("Company not found", 404);
        }
        return CompanyMap.toDTO(checkCompanyExists);
    }
}