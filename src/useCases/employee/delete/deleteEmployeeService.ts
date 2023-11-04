import { apiError } from "../../../shared/middlewares/AppError";
import { IDeleteRepository } from "../../../shared/interfaces/IRepository";
import prisma from "../create/test/clientPrisma";
import { Prisma } from "@prisma/client";
export class DeleteEmployeeService {
  constructor(
    private employeeRepository: IDeleteRepository,
  ) {}

  async execute(id: string) {
    try {
      const employee = await this.employeeRepository.delete(id);
      return employee;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throw JSON.stringify({
            erro: "funcionario nao nao existe",
            statusCode: 400,
          });
        }
      }
      throw new apiError("erro interno ao deletar", 500);
    }
  }
}
