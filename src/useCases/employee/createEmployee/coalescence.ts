import { prisma } from "../../../data/prisma/connectDb";
import { PrismaRepository } from "../../../data/prisma/repositories/prismaRepository";
import { ControllerCreateEmployee } from "./ControllerCreateEmployee";
import { CreateEmployee } from "./createEmployee";


const prismaRepository = new PrismaRepository()

const createEmployee = new CreateEmployee(prismaRepository);

const createEmployeeController = new ControllerCreateEmployee(createEmployee);



export { createEmployeeController, createEmployee };