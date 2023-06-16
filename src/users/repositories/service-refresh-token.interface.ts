import { IRefreshTokensDTO } from '../dto/refresh-token.dto';
import { RefreshToken } from '../entities/refresh-token.entity';

export interface IRefreshTokensService {
  create(refreshTokenDTO: IRefreshTokensDTO): Promise<RefreshToken>;
  findRefreshTokenByUserIdAndRefreshToken(
    idUsers: string,
    refreshToken: string,
  ): Promise<RefreshToken>;
  deleteById(id: string): Promise<void>;
}
