import { Router } from "express";
import { employeeRouter } from "./employeeRouter";
import { loginRouter } from "./loginRouter";
import { avatarRouter } from "./avatarEmployeeRouter";
import { timeSheetRouter } from "./timeSheetRouter";

const routes = Router()

routes.use("/employee", employeeRouter)
routes.use("/login", loginRouter)
routes.use("/avatar", avatarRouter);
routes.use("/timesheet", timeSheetRouter);


export { routes };