import { Router } from "express";
import { createEmployeeController } from "../../useCases/employee/create/coalescence";
import { updateEmployeeController } from "../../useCases/employee/update/coalescence";

const employeeRouter = Router()

employeeRouter.post("/", (req, res) =>
  createEmployeeController.create(req, res)
);
employeeRouter.put("/:id", (req, res) =>
  updateEmployeeController.update(req, res)
);
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