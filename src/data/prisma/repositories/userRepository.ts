import { IUser } from "../../../shared/interfaces/IUser";
import {
  ICreateRepository,
  IDeleteRepository,
  IFindAllRepository,
  IFindByEmailRepository,
  IUpdateRepository,
  IFindCredentialsRepository,
  IFindOneRepository,
  IFindByTokenRepository,
  ICreateUserTokenRepository,
} from "../../../shared/interfaces/IEmployeeRepository";
import { prisma } from "../connectDb";
import { IUserToken } from "../../../shared/interfaces/IuserToken";

export class CreateRepository implements ICreateRepository {
  async create(param: Omit<IUser, "employee_id">): Promise<IUser | null> {
    const employee = await prisma().employees.create({ data: param });
    return employee;
  }
}

export class UpdateRepository implements IUpdateRepository {
  async update(id: string, param: Partial<IUser>): Promise<IUser | null> {
    const employee = await prisma().employees.update({
      where: {
        employee_id: id,
      },
      data: param,
    });
    return employee;
  }
}

export class FindAllRepository implements IFindAllRepository {
  async findAll(): Promise<IUser[] | null> {
    const employee = await prisma().employees.findMany();

    return employee;
  }
}

export class FindCredentialsRepository implements IFindCredentialsRepository {
  async findOne({
    email,
    password,
  }: Pick<IUser, "email" | "password">): Promise<IUser | null> {
    const employee = await prisma().employees.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    return employee;
  }
}
export class FindOneRepository implements IFindOneRepository {
  async findOne(id: string): Promise<IUser | null> {
    const employee = await prisma().employees.findUnique({
      where: {
        employee_id: id,
      },
    });
    return employee;
  }
}

export class FindByEmailRepository implements IFindByEmailRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    const employee = await prisma().employees.findUnique({
      where: {
        email: email,
      },
    });
    return employee;
  }
}

export class DeleteRepository implements IDeleteRepository {
  async delete(id: string): Promise<IUser | null> {
    const employee = await prisma().employees.delete({
      where: {
        employee_id: id,
      },
    });
    return employee;
  }
}

export class FindByTokenRepository implements IFindByTokenRepository {
  async findByToken(token: string): Promise<IUserToken | null> {
    const userToken = await prisma().userToken.findFirst({
      where: {
        token: token,
      },
    });
    return userToken;
  }
}

export class CreateUserToken implements ICreateUserTokenRepository {
  async createUserToken(employee_id: string): Promise<IUserToken | null> {
    const userToken = await prisma().userToken.create({
      data: { employee_id },
    });
    return userToken;
  }
}
