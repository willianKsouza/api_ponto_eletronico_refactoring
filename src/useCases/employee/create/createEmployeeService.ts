import { IRepository } from "../../../shared/interfaces/IRepository";

import { apiError } from "../../../shared/middlewares/AppError";
import { Prisma } from "@prisma/client";
import { CreateDataDTO } from "../../../shared/utils/createDataDTO";
import { IUser } from "../../../shared/interfaces/IUser";
export class CreateEmployeeService {
  constructor(private employeeRepository: Pick<IRepository, "create">) {}

  @CreateDataDTO()
  async execute(data: Omit<IUser, "employee_id">) {
    try {
      const employee = await this.employeeRepository.create(data);

      return employee;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new apiError("usuario ja existe", 400);
        }
      }

      throw new apiError(error.message, 500);
    }
  }
}
