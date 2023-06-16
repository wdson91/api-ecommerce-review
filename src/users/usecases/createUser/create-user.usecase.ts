import { Injectable } from '@nestjs/common';
import { AppError } from 'src/shared/errors/AppError';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { hash } from 'bcrypt';

import { UsersService } from 'src/users/repositories/implementations/users.service';
import { ensurePassword } from 'src/ensures/ensurePassword';
import { ensurePhone } from 'src/ensures/ensurePhone';
import { ensureEmail } from 'src/ensures/ensureEmail';
import { ensureName } from 'src/ensures/ensureName';

@Injectable()
export class CreateUserUseCase {
    constructor(private readonly usersService: UsersService) {}

    async execute({
        name,
        email,
        password,
        telephone,
    }: CreateUserDto): Promise<User> {
        if (!ensureName(name)) {
            throw new AppError('Name is not available', 401);
        }

        if (!ensureEmail(email)) {
            throw new AppError('Email not valid', 401);
        }

        if (!ensurePhone(telephone)) {
            throw new AppError('phone is not available', 401);
        }

        const checkEmailUserExist = await this.usersService.findByEmail(email);

        if (checkEmailUserExist) {
            throw new AppError('Email already exists', 401);
        }

        if (ensurePassword(password)) {
            throw new AppError('Password low lenght', 401);
        }

        const passwordHash = await hash(password, 8);

        const user = await this.usersService.create({
            name,
            email,
            password: passwordHash,
            telephone,
        });

        return user;
    }
}
