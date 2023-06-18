import { instanceToInstance } from "class-transformer";
import { ICompanyResponseDTO } from "../dto/response-user.dto";




export class CompanyMap {
    static toDTO({
        id,
        name,
        phone,
        address,
        createdAt,
        updatedAt,
    }: ICompanyResponseDTO): ICompanyResponseDTO {
        const company = instanceToInstance({
            id,
            name,
            phone,
            address,
            createdAt,
            updatedAt,
        });

        return company;
    }
}