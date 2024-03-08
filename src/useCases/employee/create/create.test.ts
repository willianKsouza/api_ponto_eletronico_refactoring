import { randomUUID } from "crypto";
import { ICreateRepository } from "../../../shared/interfaces/IEmployeeRepository"
import { IUser } from "../../../shared/interfaces/IUser";
import { CreateEmployeeService } from "./createEmployeeService"
import { CreateRepository } from "../../../data/prisma/repositories/userRepository";
import { apiError } from "../../../shared/middlewares/AppError";



jest.mock("../../../data/prisma/repositories/userRepository")
const createRepositoryMock = CreateRepository as jest.Mock<CreateRepository>

// const IUser = {
//   name_employee: 'naruto uzumaki',
//   function_employee: 'hokage',
//   workload_employee: 8,
//   email: 'naruto@gmail.com',
//   password: '222'

// }

describe('useCase Create testagem de inputs',() => {
  let IUser: any
    test('useCase Create testagem de inputs name_employee', async () => {
      IUser = {
        name_employee: 'n',
        function_employee: 'hokage',
        workload_employee: 8,
        email: 'naruto@gmail.com',
        password: '222'
      }
      const createRepository = new createRepositoryMock()
      const createEmployeeService = new CreateEmployeeService(createRepository)
      
      await expect(async () => createEmployeeService.execute(IUser)).rejects.toThrow("{\"name_employee\":\"String must contain at least 2 character(s)\"}")

    })
    test('useCase Create testagem de inputs password', async () => {
      IUser = {
        name_employee: 'naruto',
        function_employee: 'hokage',
        workload_employee: 8,
        email: 'naruto@gmail.com',
        password: '2'
      }
      const createRepository = new createRepositoryMock()
      const createEmployeeService = new CreateEmployeeService(createRepository)

      await expect(async () => createEmployeeService.execute(IUser)).rejects.toThrow("{\"password\":\"String must contain at least 3 character(s)\"}")

    })
    test('useCase Create testagem de inputs workload_employee', async () => {
      IUser = {
        name_employee: 'naruto',
        function_employee: 'hokage',
        workload_employee: '8',
        email: 'naruto@gmail.com',
        password: '222'
      }
      const createRepository = new createRepositoryMock()
      const createEmployeeService = new CreateEmployeeService(createRepository)

      await expect(async () => createEmployeeService.execute(IUser)).rejects.toThrow("{\"workload_employee\":\"Invalid literal value, expected 8\"}")

    })
    //preciso arrumar esse test
    test('useCase Create testagem de inputs workload_employee', async () => {
      IUser = {
        name_employee: 'naruto',
        function_employee: 'hokage',
        workload_employee: 7,
        email: 'naruto@gmail.com',
        password: '222'
      }
      const createRepository = new createRepositoryMock()
      const createEmployeeService = new CreateEmployeeService(createRepository)

      await expect(async () => createEmployeeService.execute(IUser)).rejects.toThrow("{\"workload_employee\":\"Invalid literal value, expected 8\"}")

    })
})