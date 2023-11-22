import { IFindCredentialsRepository } from "../../shared/interfaces/IEmployeeRepository";
import { IUser } from "../../shared/interfaces/IUser";
import { apiError } from "../../shared/middlewares/AppError";
import { sign } from "jsonwebtoken";
export class LoginEmployeeService {
  constructor(private employee: IFindCredentialsRepository) {}
  async execute({ email, password }: Pick<IUser, "email" | "password">) {
    const employeeCredentials = await this.employee.findOne({
      email,
      password,
    });
    if (!employeeCredentials) {
      throw new apiError("usuario ou senha incorreto", 404);
    }
    const token = sign(
      { user: JSON.stringify(employeeCredentials) },
      process.env.SECRET as string,
      {
        expiresIn: 300,
      }
    );

    return {
      auth: true,
      token,
    };
  }
}
