import { Request, Response } from "express";
import { CreateEmployeeService } from "./createEmployeeService";
import { IUser } from "../../../shared/interfaces/IUser";
import { apiError } from "../../../shared/middlewares/AppError";

export class ControllerCreateEmployee {
  constructor(private createEmployee: CreateEmployeeService) {}

 async create(req: Request, res: Response): Promise<Response>  {
    const {
      name_employee,
      function_employee,
      workload_employee,
      email,
      password,
    } = req.body;

    try {
      const Employee = await this.createEmployee.execute({
        name_employee,
        function_employee,
        workload_employee,
        email,
        password,
      });
      return res.status(201).json({ data: Employee });
    } catch (error) {
      throw new apiError("bad request", 500);
    }
  };
}
