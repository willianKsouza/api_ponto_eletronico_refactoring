import { DeleteRepository } from "../../../data/prisma/repositories/prismaRepository";
import { ControllerDeleteEmployee } from "./controllerDeleteEmpoyee";
import { DeleteEmployeeService} from "./deleteEmployeeService";

const deleteRepository = new DeleteRepository();
const deleteEmployeeService = new DeleteEmployeeService(deleteRepository);
const deleteEmployeeController = new ControllerDeleteEmployee(
  deleteEmployeeService
);

export { deleteEmployeeController };
