import { instanceToInstance } from 'class-transformer';
import { IUserResponseDTO } from '../dto/response-user.dto';

export class UserMap {
  static toDTO({
    id,
    name,
    email,
    admin,
    telephone,
    createdAt,
    updatedAt,
  }: IUserResponseDTO): IUserResponseDTO {
    const user = instanceToInstance({
      id,
      name,
      email,
      admin,
      telephone,
      createdAt,
      updatedAt,
    });

    return user;
  }
}
