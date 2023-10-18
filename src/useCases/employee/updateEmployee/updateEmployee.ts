import { apiError } from "../../../shared/middlewares/AppError";
import { IUpdateEmployee } from "./IUpdateEmployee";
import { IRepository } from "../../../shared/interfaces/IRepository";
export class UpdateEmployee {
  constructor(private employeeRepository: IRepository) {}

  async execute( data: IUpdateEmployee) {
    const employee = this.employeeRepository.findOne(data.employee_id);

    if (!employee) {
      throw new apiError('erro',500)
    }
    this.employeeRepository.update(data.employee_id, data);
    return employee;
  }
}