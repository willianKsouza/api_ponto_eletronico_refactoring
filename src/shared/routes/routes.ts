import { Router } from "express";
import { employeeRouter } from "./employeeRouter";
import { loginRouter } from "./loginRouter";


const routes = Router()

routes.use("/employee", employeeRouter)
routes.use("/login", loginRouter)


export { routes };