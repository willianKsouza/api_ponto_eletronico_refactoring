import {
  UpdateRepository,
  FindOneRepository,
} from "../../../data/prisma/repositories/userRepository";
import { ControllerUpdateEmployee } from "./controllerUpdateEmpoyee";
import { UpdateEmployeeService } from "./updateEmployeeService";

const updateRepository = new UpdateRepository();
const findOneRepository = new FindOneRepository();
const updateEmployeeService = new UpdateEmployeeService(
  updateRepository,
  findOneRepository
);
const updateEmployeeController = new ControllerUpdateEmployee(
  updateEmployeeService
);

export { updateEmployeeController };
