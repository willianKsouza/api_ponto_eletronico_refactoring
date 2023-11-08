import { apiError } from "../../../shared/middlewares/AppError";
import {
  IFindOneRepository,
  IUpdateRepository,
} from "../../../shared/interfaces/IRepository";
import { UpdateDataValidation } from "../../../shared/utils/updateDataValidation";

interface IUpdateEmployee {
  queryId: string;
  name_employee?: string;
  function_employee?: string;
  workload_employee?: number;
  email?: string;
}

export class UpdateEmployeeService {
  constructor(
    private employeeRepository: IUpdateRepository,
    private employee: IFindOneRepository
  ) {}

  @UpdateDataValidation()
  async execute(data: IUpdateEmployee) {
    try {
      const { email, function_employee, name_employee, workload_employee } =
        data;
      const employeeExists = await this.employee.findOne(data.queryId);
      if (employeeExists) {
      const employee = await this.employeeRepository.update(data.queryId, {
        email,
        function_employee,
        name_employee,
        workload_employee,
      });

      return employee;
      }
      throw new apiError("erro ao atualizar", 400);
    } catch (error) {
      throw new apiError("erro update service", 500);
    }
  }
}
