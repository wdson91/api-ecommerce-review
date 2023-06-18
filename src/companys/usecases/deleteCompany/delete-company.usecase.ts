import { CompanysService } from "src/companys/repositories/implementations/companys.service";
import { Injectable } from '@nestjs/common';
import { ICompanyResponseDTO } from "src/companys/dto/response-user.dto";
import { AppError } from "src/shared/errors/AppError";
import { ensureId } from "src/ensures/ensureId";




@Injectable()
export class DeleteCompanyByIdUseCase {

    constructor(private readonly companysService: CompanysService) { }

    async execute(id: string): Promise<any> {

        if (!ensureId(id)) {
            throw new AppError("Company not found", 401)
        }
        const checkCompanyExists = await this.companysService.findById(id) as unknown as ICompanyResponseDTO;

        if (!checkCompanyExists) {
            throw new AppError("Company not found", 404)
        }

        const company = await this.companysService.deleteById(id);

        return company;

    }
}
