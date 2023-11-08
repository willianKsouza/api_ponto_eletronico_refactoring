import { Router } from "express";
import { loginEmployeeController } from "../../useCases/logIn/coalescence";

const loginRouter = Router();

loginRouter.post("/", (req, res) => loginEmployeeController.login(req, res));

export {loginRouter};
