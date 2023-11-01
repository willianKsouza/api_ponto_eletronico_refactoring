import { UpdateRepository } from "../../../data/prisma/repositories/prismaRepository";
import { ControllerUpdateEmployee } from "./ControllerUpdateEmpoyee";
import { UpdateEmployeeService } from "./updateEmployeeService";

const updateRepository = new UpdateRepository();
const updateEmployeeService = new UpdateEmployeeService(updateRepository);
const updateEmployeeController = new ControllerUpdateEmployee(
  updateEmployeeService
);

export { updateEmployeeController };
