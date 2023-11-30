import { IFindByEmailRepository } from "../../shared/interfaces/IEmployeeRepository";
import { compareSync } from "bcrypt";
import { IUser } from "../../shared/interfaces/IUser";
import { apiError } from "../../shared/middlewares/AppError";
import { sign } from "jsonwebtoken";
export class LoginEmployeeService {
  constructor(private employee: IFindByEmailRepository) {}
  async execute({ email, password }: Pick<IUser, "email" | "password">) {
    const employeeCredentials = await this.employee.findByEmail(email)
     console.log(employeeCredentials);
    if (!employeeCredentials) {
      throw new apiError("email incorreto", 404);
    }
    
    const compareHash = compareSync(
      password,
      employeeCredentials.password
    );
      console.log(compareHash);
      
    if (compareHash) {
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
    } else {
      throw new apiError("email incorreto", 404);
    }
  }
}
