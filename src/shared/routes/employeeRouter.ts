import { Router } from "express";
import { createEmployeeController } from "../../useCases/employee/create/coalescence";
import { updateEmployeeController } from "../../useCases/employee/update/coalescence";
import { deleteEmployeeController } from "../../useCases/employee/delete/coalescence";
import { findAllEmployeeController } from "../../useCases/employee/findAll/coalescence";
import { isAuthJWT } from "../middlewares/isAuthJWT";
import { isAuthADM } from "../middlewares/isAuthADM";

const employeeRouter = Router();

employeeRouter.post("/", isAuthJWT, isAuthADM, (req, res) =>
  createEmployeeController.create(req, res)
);
employeeRouter.put("/:id", isAuthJWT, (req, res) =>
  updateEmployeeController.update(req, res)
);
employeeRouter.delete("/", (req, res) =>
  deleteEmployeeController.delete(req, res)
);
employeeRouter.get("/", (req, res) =>
  findAllEmployeeController.findAll(req, res)
);

export { employeeRouter };
