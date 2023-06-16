import { instanceToInstance } from 'class-transformer';
import { IUserResponseDTO } from '../dto/response-user.dto';

export class ListUsersMap {
  static toDTOArray(users: IUserResponseDTO[]): IUserResponseDTO[] {
    return users.map(
      ({ id, name, email, telephone, admin, createdAt, updatedAt }) => {
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
      },
    );
  }
}
