import { IUser } from "./IUser";

export interface IRepository {
  create(data: Omit<IUser, "employee_id">): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findOne(id: string): Promise<IUser | null>;
  findAll(): Promise<IUser[] | null>;
  update(id: string, param: Partial<IUser>): Promise<IUser | null>;
  delete(id: string): Promise<IUser | null>;
}
