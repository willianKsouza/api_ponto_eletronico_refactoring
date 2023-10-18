import { Router } from "express";
import { createEmployeeController } from "../../useCases/employee/createEmployee/coalescence";
import { updateEmployeeController } from "../../useCases/employee/updateEmployee/coalescence";

const employeeRouter = Router()

employeeRouter.post("/",
  createEmployeeController.create
);
// employeeRouter.put("/:id", (req, res) =>
//   updateEmployeeController.update(req, res)
// );
// employeeRouter.get("/:id", (req, res) =>
//   ReadEmployeeController.update(req, res)
// );
// employeeRouter.delete("/:id", (req, res) =>
//   DeleteEmployeeController.update(req, res)
// );
// employeeRouter.get("/:id", (req, res) =>
//   ShowEmployeeController.update(req, res)
// );

export {employeeRouter}