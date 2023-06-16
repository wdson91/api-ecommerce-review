import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthenticateUserUseCase } from './authenticate-user.usecase';
import { IRequest } from 'src/users/dto/request-user.dto';

@Controller('/api/sessions')
export class AuthenticateUserController {
    constructor(
        @Inject(AuthenticateUserUseCase)
        private readonly authenticateUserUseCase: AuthenticateUserUseCase,
    ) {}

    @Post()
    session(@Body() request: IRequest) {
        return this.authenticateUserUseCase.execute(request);
    }
}
