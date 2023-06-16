import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IRefreshTokensService } from '../service-refresh-token.interface';
import { RefreshToken } from 'src/users/entities/refresh-token.entity';
import { Model } from 'mongoose';
import { IRefreshTokensDTO } from 'src/users/dto/refresh-token.dto';

@Injectable()
export class RefreshTokenService implements IRefreshTokensService {
  constructor(
    @InjectModel(RefreshToken.name) private refreshToken: Model<RefreshToken>,
  ) {}
  async create(refreshTokenDTO: IRefreshTokensDTO): Promise<RefreshToken> {
    const refreshToken = new this.refreshToken(refreshTokenDTO);

    return refreshToken.save();
  }
  async findRefreshTokenByUserIdAndRefreshToken(
    idUsers: string,
    refreshToken: string,
  ): Promise<RefreshToken> {
    return this.refreshToken.findOne({
      idUsers,
      refreshToken,
    });
  }
  async deleteById(id: string): Promise<void> {
    await this.refreshToken.findByIdAndDelete(id);
  }
}
