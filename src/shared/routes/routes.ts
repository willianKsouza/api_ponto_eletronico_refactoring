import { Router } from "express";
import { employeeRouter } from "./employeeRouter";


const routes = Router()

routes.use("/employee", employeeRouter)


export { routes };