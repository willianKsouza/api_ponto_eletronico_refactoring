
import { CreateRepository } from "../../../data/prisma/repositories/userRepository";
import { ControllerCreateEmployee } from "./controllerCreateEmployee";
import { CreateEmployeeService } from "./createEmployeeService";

const createRepository = new CreateRepository();

const createEmployee = new CreateEmployeeService(createRepository);

const createEmployeeController = new ControllerCreateEmployee(createEmployee);

export { createEmployeeController };
