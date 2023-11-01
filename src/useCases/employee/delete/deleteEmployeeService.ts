import { apiError } from "../../../shared/middlewares/AppError";
import { IRepository } from "../../../shared/interfaces/IRepository";
export class DeleteEmployeeService {
  constructor(private employeeRepository: Pick<IRepository, "delete">) {}

  async execute(id: string) {
    try {
      const employee = await this.employeeRepository.delete(id);
      return employee;
    } catch (error) {
      throw new apiError("nao foi possivel deletar", 400);
    }
  }
}
