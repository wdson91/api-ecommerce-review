import { Injectable } from '@nestjs/common';

import { IUserResponseDTO } from 'src/users/dto/response-user.dto';
import { ListUsersMap } from 'src/users/mappers/list-user.map';
import { UsersService } from 'src/users/repositories/implementations/users.service';

@Injectable()
export class ListUsersUseCase {
    constructor(private readonly usersService: UsersService) { }

    async execute(): Promise<IUserResponseDTO[]> {
        const users =
            (await this.usersService.list()) as unknown as IUserResponseDTO[];

        return ListUsersMap.toDTOArray(users);
    }
}
