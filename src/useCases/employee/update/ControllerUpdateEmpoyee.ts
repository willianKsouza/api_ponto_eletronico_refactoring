import { Request, Response } from "express";
import { IRepository } from "../../../shared/interfaces/IRepository";
import { IUser } from "../../../shared/interfaces/IUser";
import { UpdateEmployeeService } from "./updateEmployeeService";

export class ControllerUpdateEmployee {
  constructor(private updateEmployee: UpdateEmployeeService) {}
  async update(req: Request, res: Response) {
    const {
      name_employee,
      function_employee,
      workload_employee,
      email,
      password,
    } = req.body;
    const queryId = req.params.id    //preciso teestar isso
    const employee = await this.updateEmployee.execute({
      employee_id: queryId,
      name_employee,
      function_employee,
      workload_employee,
      email,
      password,
    });
    console.log(employee);
    
    return res.status(200).json({ data: employee });
  }
}