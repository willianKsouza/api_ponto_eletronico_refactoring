import { IUser } from "../../../shared/interfaces/IUser";
import { IRepository } from "../../../shared/interfaces/IRepository";
import { prisma } from "../connectDb";



export class PrismaRepository implements IRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    const employee = await prisma().employees.findUnique({
      where: {
        email: email,
      },
    });
    return employee;
  }


  async findOne(param: string): Promise<IUser | null> {
    const employee = await prisma().employees.findUnique({
      where: {
        employee_id: param,
      },
    });

    return employee;
  }
  async findAll(): Promise<IUser[] | null> {
    const employee = await prisma().employees.findMany();

    return employee;
  }

  async create(param: IUser): Promise<IUser | null> {
    const employee = await prisma().employees.create({ data: param });
    return employee;
  }
  async update(id: string, param: Partial<IUser>): Promise<IUser | null> {
    const employee = await prisma().employees.update({
      where: {
        employee_id: id,
      },

      data: param,
    });
    return employee;
  }
  async delete(param: string): Promise<IUser | null> {
    const employee = await prisma().employees.delete({
      where: {
        employee_id: param,
      },
    });
    return employee;
  }
}