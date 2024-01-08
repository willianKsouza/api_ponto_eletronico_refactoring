import { Router } from "express";
import { findByEmailEmployeeController } from "../../useCases/employee/findByEmail/injection";


const searchEmployee = Router();


searchEmployee.get("/", (req, res) =>
  findByEmailEmployeeController.findByEmail(req, res)
);
export { searchEmployee };
