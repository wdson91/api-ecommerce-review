import { Injectable } from '@nestjs/common';
import { ensureId } from 'src/ensures/ensureId';
import { AppError } from 'src/shared/errors/AppError';
import { IUserResponseDTO } from 'src/users/dto/response-user.dto';
import { UserMap } from 'src/users/mappers/user.map';

import { UsersService } from 'src/users/repositories/implementations/users.service';

@Injectable()
export class FindUserByIdUseCase {
    constructor(private readonly usersService: UsersService) {}

    async execute(id: string): Promise<IUserResponseDTO> {
        if (!ensureId(id)) {
            throw new AppError('User not found', 401);
        }
        const checkUserExists = (await this.usersService.findById(
            id,
        )) as unknown as IUserResponseDTO;

        if (!checkUserExists) {
            throw new AppError('User not found', 404);
        }
        return UserMap.toDTO(checkUserExists);
    }
}
