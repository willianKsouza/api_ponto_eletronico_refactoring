import { Request, Response } from "express";
import { DeleteEmployeeService } from "./deleteEmployeeService";

export class ControllerDeleteEmployee {
  constructor(private deleteEmployee: DeleteEmployeeService) {}
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.body;
      
        const employee = await this.deleteEmployee.execute(id);
        return res.status(200).json({ data: employee });
    } catch (error) {
      res.status(500).json(error)
    }
  }
}