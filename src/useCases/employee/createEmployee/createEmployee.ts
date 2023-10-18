import { IRepository } from "../../../shared/interfaces/IRepository";
import { ICreateEmployee } from "./ICreateEmployee";
import { apiError } from "../../../shared/middlewares/AppError";
import { Prisma } from "@prisma/client";

export class CreateEmployee {
  constructor(private employeeRepository: IRepository) {}
  async execute(data: ICreateEmployee) {
    // const employeeExists = await this.employeeRepository.findByEmail(
    //   data.email
    // );

    // if (employeeExists) {
    //   throw new apiError("usuario ja existe", 500);
    // }
    try {
      const employee = await this.employeeRepository.create(data);

      return employee;
    } catch (e) {
      ///
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        console.log(e.code);
        // if (e.code === "P2002") {
        //   throw new apiError("usuario ja existe", 400);
        // }
        // if (e.code === "P2001") {
        //   console.log(e.code);
          
        //   throw new apiError(
        //     "A autenticação falhou no servidor de banco de dados em {database_host}, as credenciais de banco de dados fornecidas {database_user}não são válidas.",
        //     400
        //   );
        // }
      }
      throw new apiError(e, 500);
    }
  }
}
