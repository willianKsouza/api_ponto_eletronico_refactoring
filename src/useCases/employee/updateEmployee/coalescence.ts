import { PrismaRepository } from "../../../data/prisma/repositories/prismaRepository";
import { ControllerUpdateEmployee } from "./ControllerUpdateEmpoyee";
import { UpdateEmployee } from "./updateEmployee";


const prismaRepository = new PrismaRepository()
const updateEmployee = new UpdateEmployee(prismaRepository);
const updateEmployeeController = new ControllerUpdateEmployee(updateEmployee);

export { updateEmployeeController };