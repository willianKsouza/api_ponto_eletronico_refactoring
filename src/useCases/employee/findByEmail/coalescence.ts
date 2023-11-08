import { FindByEmailRepository } from "../../../data/prisma/repositories/prismaRepository";
import { ControllerFindByEmailEmployee } from "./ControllerFindByEmailEmpoyee";
import { FindByEmailEmployeeService } from "./findByEmailEmployeeService";

const findByEmailRepository = new FindByEmailRepository();
const findByEmailEmployeeService = new FindByEmailEmployeeService(
  findByEmailRepository
);
const findByEmailEmployeeController = new ControllerFindByEmailEmployee(
  findByEmailEmployeeService
);

export { findByEmailEmployeeController };
