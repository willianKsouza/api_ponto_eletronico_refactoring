import { NextFunction, Request, Response } from "express";
import { CreateEmployee } from "./createEmployee";


export class ControllerCreateEmployee {
  constructor(private createEmployee: CreateEmployee) {}

  create = async (req: Request, res: Response):Promise<Response> =>  {

    const {
      name_employee,
      function_employee,
      workload_employee,
      email,
      password,
    } = req.body;
  
  const Employee = await this.createEmployee.execute({
      name_employee,
      function_employee,
      workload_employee,
      email,
      password
    });
      
      
    return res.status(201).json({ data: Employee });
  }
}
