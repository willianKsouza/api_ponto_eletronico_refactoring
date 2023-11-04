import { Router } from "express";
import { createEmployeeController } from "../../useCases/employee/create/coalescence";
import { updateEmployeeController } from "../../useCases/employee/update/coalescence";
import { deleteEmployeeController } from "../../useCases/employee/delete/coalescence";
const employeeRouter = Router()

employeeRouter.post("/", (req, res) =>
  createEmployeeController.create(req, res)
);
employeeRouter.put("/:id", (req, res) =>
  updateEmployeeController.update(req, res)
);
employeeRouter.delete("/", (req, res) =>
  deleteEmployeeController.delete(req, res)
);

export {employeeRouter}