import { apiError } from "../../../shared/middlewares/AppError";
import { IUpdateRepository } from "../../../shared/interfaces/IRepository";
import { IUser } from "../../../shared/interfaces/IUser";
export class UpdateEmployeeService {
  constructor(private employeeRepository: IUpdateRepository) {}

  async execute(
    data: Omit<
      IUser,
      "createdAt" | "updatedAt" | "avatar_employee?" | "deleted_at"
    >
  ) {
    try {
      const employee = await this.employeeRepository.update(
        data.employee_id,
        data
      );
      return employee;
    } catch (error) {
      throw new apiError("erro update service", 500);
    }
  }
}
