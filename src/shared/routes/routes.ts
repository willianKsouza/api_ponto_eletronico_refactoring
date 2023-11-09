import { Router } from "express";
import { employeeRouter } from "./employeeRouter";
import { loginRouter } from "./loginRouter";
import { avatarRouter } from "./avatarEmployeeRouter";

const routes = Router()

routes.use("/employee", employeeRouter)
routes.use("/login", loginRouter)
routes.use("/avatar", avatarRouter);


export { routes };