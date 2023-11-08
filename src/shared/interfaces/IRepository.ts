import { IUser } from "./IUser";

export interface ICreateRepository {
  create(data: Omit<IUser, "employee_id">): Promise<IUser | null>;
}
export interface IFindByEmailRepository {
  findByEmail(email: string): Promise<IUser | null>;
}
export interface IFindCredentialsRepository {
  findOne({
    email,
    password,
  }: Pick<IUser, "email" | "password">): Promise<IUser | null>;
}
export interface IFindOneRepository {
  findOne(id: string): Promise<IUser | null>;
}
export interface IFindAllRepository {
  findAll(): Promise<IUser[] | null>;
}
export interface IUpdateRepository {
  update(id: string, param: Partial<IUser>): Promise<IUser | null>;
}
export interface IDeleteRepository {
  delete(id: string): Promise<IUser | null>;
}
