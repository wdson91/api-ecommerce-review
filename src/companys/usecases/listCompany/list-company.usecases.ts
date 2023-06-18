import { Injectable } from "@nestjs/common";

import { ICompanyResponseDTO } from "src/companys/dto/response-user.dto";

import { ListCompanysMap } from "src/companys/mappers/list-company.map";
import { CompanysService } from "src/companys/repositories/implementations/companys.service";




@Injectable()
export class ListCompanysUseCase {
    constructor(private readonly companysService: CompanysService) { }

    async execute(): Promise<ICompanyResponseDTO[]> {
        const companys =
            (await this.companysService.list()) as unknown as ICompanyResponseDTO[];

        return ListCompanysMap.toDTOArray(companys);
    }
}
