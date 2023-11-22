import { FindCredentialsRepository } from "../../data/prisma/repositories/userRepository";
import { ControllerLoginEmployee } from "./controllerLoginEmployee";
import { LoginEmployeeService } from "./loginEmployeeService";

const findCredentialsRepository = new FindCredentialsRepository();
const loginEmployeeService = new LoginEmployeeService(
  findCredentialsRepository
);
const loginEmployeeController = new ControllerLoginEmployee(
  loginEmployeeService
);

export { loginEmployeeController };