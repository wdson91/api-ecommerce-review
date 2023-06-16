import { ObjectId } from 'mongoose';

export interface IUserResponseDTO {
  id: ObjectId;
  name: string;
  email: string;
  telephone: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
