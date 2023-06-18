import { ObjectId } from 'mongoose';

export interface ICompanyResponseDTO {
  id: ObjectId;
  name: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
