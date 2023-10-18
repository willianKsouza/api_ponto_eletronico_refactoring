import { Request, Response } from "express";
import { IRepository } from "../../../shared/interfaces/IRepository";
import { IUser } from "../../../shared/interfaces/IUser";
import { UpdateEmployee } from "./updateEmployee";

export class ControllerUpdateEmployee  {
    constructor(private updateEmployee: UpdateEmployee){}
    update(req: Request, res: Response) {
      const {
        name_employee,
        function_employee,
        workload_employee,
        email,
        password,
      } = req.body;
      console.log(req.body);
      
        const queryID = req.params[0]//preciso teestar isso
        console.log(queryID);
        
     const employee = this.updateEmployee.execute({
         employee_id:queryID,
         name_employee,
         function_employee,
         workload_employee,
         email,
         password,
       });
        
        return res.status(200).json({ data: employee });
    }
}