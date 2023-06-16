import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { ensureEmail } from 'src/ensures/ensureEmail';
import { ensurePassword } from 'src/ensures/ensurePassword';
import { AppError } from 'src/shared/errors/AppError';
import { DayjsProvider } from 'src/shared/providers/DateProvider/implementations/dayjs-date.provider';
import auth from 'src/users/auth/auth';
import { IRequest } from 'src/users/dto/request-user.dto';
import { RefreshTokenService } from 'src/users/repositories/implementations/refresh-token.service';
import { UsersService } from 'src/users/repositories/implementations/users.service';

export interface IResponse {
    user: {
        id: string;
        name: string;
        email: string;
        admin: boolean;
    };
    token: string;
    refreshToken: string;
}

@Injectable()
export class AuthenticateUserUseCase {
    constructor(
        private readonly usersService: UsersService,
        private readonly dayjsDateProvider: DayjsProvider,
        private readonly refreshTokenService: RefreshTokenService,
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        console.log(email);
        if (!ensureEmail(email)) {
            throw new AppError('Email not valid', 401);
        }

        const userExists = await this.usersService.findByEmail(email);

        if (!userExists) {
            throw new AppError('Email or password incorrect', 401);
        }

        if (ensurePassword(password)) {
            throw new AppError('Password low lenght', 401);
        }

        const checkPasswordIsValid = await compare(
            password,
            userExists.password,
        );

        if (!checkPasswordIsValid) {
            throw new AppError('Email or password incorrect', 401);
        }

        const { name, id, email: userEmail } = userExists;

        const token = sign({ name, userEmail }, auth.secretToken, {
            subject: String(id),
            expiresIn: auth.expireInToken,
        });

        const refreshToken = sign({ userEmail }, auth.secretRefreshToken, {
            subject: String(id),
            expiresIn: auth.expireRefreshToken,
        });

        const expireDateFormat = this.dayjsDateProvider.addDays(
            auth.daysRefreshToken,
        ) as unknown as Date;
        await this.refreshTokenService.create({
            idUsers: id,
            refreshToken,
            expireDate: expireDateFormat,
        });
        const userInfo: IResponse = {
            user: {
                id,
                name,
                email,
                admin: userExists.admin,
            },
            token,
            refreshToken,
        };

        return userInfo;
    }
}
