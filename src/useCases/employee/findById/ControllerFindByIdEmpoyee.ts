import { Request, Response } from "express";
import { FindByIdEmpoyeeService } from "./findByIdEmployeeService";

export class ControllerFindByIdEmployee {
  constructor(private findByIdEmpoyee: FindByIdEmpoyeeService) {}
  async findById(req: Request, res: Response) {
    try {
      const { employee_id } = req.cookies.securityData;
      const employee = await this.findByIdEmpoyee.execute(employee_id);
      return res.status(200).json({ employee });
    } catch (error) {
      return res.status(error.statusCode).json({ data: error.message });
    }
  }
}