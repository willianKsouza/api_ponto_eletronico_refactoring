import { Request, Response } from "express";
import { DeleteEmployeeService } from "./deleteEmployeeService";

export class ControllerDeleteEmployee {
  constructor(private deleteEmployee: DeleteEmployeeService) {}
  async delete(req: Request, res: Response) {
    const queryId = req.params.id    //preciso teestar isso
    const employee = await this.deleteEmployee.execute(queryId);
    return res.status(200).json({ data: employee });
  }
}