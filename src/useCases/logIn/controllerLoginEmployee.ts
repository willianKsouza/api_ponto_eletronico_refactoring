import { Request, Response } from "express";
import { LoginEmployeeService } from "./loginEmployeeService";

export class ControllerLoginEmployee {
  constructor(private loginEmployee: LoginEmployeeService) {}
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const loginEmployee = await this.loginEmployee.execute({
        email,
        password,
      });
      return res.status(201).json({ data: loginEmployee });
    } catch (error) {
      return res.status(error.statusCode).json({ data: error.message });
    }
  }
}
