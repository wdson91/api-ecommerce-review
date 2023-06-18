import { instanceToInstance } from 'class-transformer';

import { ICompanyResponseDTO } from '../dto/response-user.dto';


export class ListCompanysMap {
    static toDTOArray(company: ICompanyResponseDTO[]): ICompanyResponseDTO[] {
        return company.map(
            ({ id, name, phone, address, createdAt, updatedAt }) => {
                const user = instanceToInstance({
                    id,
                    name,
                    phone,
                    address,
                    createdAt,
                    updatedAt,
                });

                return user;
            },
        );
    }
}
