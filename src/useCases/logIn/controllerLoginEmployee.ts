import { Request, Response } from "express";
import { LoginEmployeeService } from "./loginEmployeeService";


export class ControllerLoginEmployee {
  constructor(private loginEmployee: LoginEmployeeService) {}
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { auth, token} = await this.loginEmployee.execute({
        email,
        password,
      });

      return res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
        })
        .status(201)
        .json({ auth: auth, email: email});
    } catch (error) {
      console.log(error);

      return res.status(error.statusCode).json({ data: error.message });
    }
  }
}
