import { Router } from "express";
import { controllerForgotPassword } from "../../useCases/employee/password/sendEmailForgotPassword/injection";
import { controllerResetPassword } from "../../useCases/employee/password/resetPasswordService/injection";


const passwordRouter = Router();

passwordRouter.get("/forgot", (req, res) =>
  controllerForgotPassword.create(req, res)
);
passwordRouter.put("/reset", (req, res) =>
  controllerResetPassword.reset(req, res)
);
export { passwordRouter };
