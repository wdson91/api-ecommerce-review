import { Injectable } from '@nestjs/common';
import { AppError } from 'src/shared/errors/AppError';

import { User } from 'src/users/entities/user.entity';
import { hash } from 'bcrypt';

import { UsersService } from 'src/users/repositories/implementations/users.service';
import { ensurePassword } from 'src/ensures/ensurePassword';
import { ensurePhone } from 'src/ensures/ensurePhone';
import { ensureEmail } from 'src/ensures/ensureEmail';
import { ensureName } from 'src/ensures/ensureName';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class UpdateUserUseCase {
    constructor(private readonly usersService: UsersService) { }

    async execute(
        id: string,
        { name, email, password, telephone }: UpdateUserDto,
    ): Promise<User> {
        if (!ensureName(name)) {
            throw new AppError('Name is not available', 401);
        }

        if (!ensureEmail(email)) {
            throw new AppError('Email not valid', 401);
        }

        if (!ensurePhone(telephone)) {
            throw new AppError('phone is not available', 401);
        }
        const checkUserExist = await this.usersService.findById(id);

        if (!checkUserExist) {
            throw new AppError('User not exists', 401);
        }

        const checkEmailUserExist = await this.usersService.findByEmail(email);

        if (checkEmailUserExist) {
            if (checkEmailUserExist.email !== checkUserExist.email) {
                throw new AppError('Email already exists', 401);
            }
        }

        if (ensurePassword(password)) {
            throw new AppError('Password low lenght', 401);
        }

        const passwordHash = await hash(password, 8);

        const user = await this.usersService.updateById(id, {
            name,
            email,
            password: passwordHash,
            telephone,
        });

        return user;
    }
}
