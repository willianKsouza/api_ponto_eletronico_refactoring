import { IUser } from "../../../shared/interfaces/IUser";
import { IRepository } from "../../../shared/interfaces/IRepository";
import { prisma } from "../connectDb";



export class CreateRepository implements Pick<IRepository, "create"> {
  async create(param: Omit<IUser, "employee_id">): Promise<IUser | null> {
    const employee = await prisma().employees.create({ data: param });
    return employee;
  }
}

export class UpdateRepository implements Pick<IRepository, "update"> {
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


export class FindAllRepository implements Pick<IRepository, "findAll"> {
  async findAll(): Promise<IUser[] | null> {
    const employee = await prisma().employees.findMany();

    return employee;
  }
}


export class FindOneRepository implements Pick<IRepository, "findOne"> {
  async findOne(param: string): Promise<IUser | null> {
    const employee = await prisma().employees.findUnique({
      where: {
        employee_id: param,
      },
    });

    return employee;
  }
}


export class FindByEmailRepository implements Pick<IRepository, "findByEmail"> {
  async findByEmail(email: string): Promise<IUser | null> {
    const employee = await prisma().employees.findUnique({
      where: {
        email: email,
      },
    });
    return employee;
  }
}

export class DeleteRepository implements Pick<IRepository, "delete"> {
  async delete(param: string): Promise<IUser | null> {
    const employee = await prisma().employees.delete({
      where: {
        employee_id: param,
      },
    });
    return employee;
  }
}