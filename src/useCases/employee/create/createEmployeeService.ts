import { ICreateRepository } from "../../../shared/interfaces/IRepository";

import { apiError } from "../../../shared/middlewares/AppError";
import { Prisma } from "@prisma/client";

import { IUser } from "../../../shared/interfaces/IUser";
import { CreateDataValidation } from "../../../shared/utils/createDataValidation";
export class CreateEmployeeService {
  constructor(private employeeRepository: ICreateRepository) {}
  @CreateDataValidation()
  async execute(data: Omit<IUser, "employee_id">) {
    try {
      const employee = await this.employeeRepository.create(data);

      return employee;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw JSON.stringify({
            erro: "usuario ja existe",
            statusCode: 400,
          });
        }
      }
      throw new apiError("erro interno, create service", 500);
    }
  }
}
