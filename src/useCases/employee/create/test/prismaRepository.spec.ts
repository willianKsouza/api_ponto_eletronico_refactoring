import { PrismaRepository } from "../../../../data/prisma/repositories/prismaRepository";
import { prismaMock } from "./singleton";


  it('#CREATE ',async () => {
    const sutRepo = new PrismaRepository();
    let _user1 = {
         employee_id: "c176b1ce-4400-42b2-9121-0f28694b5050",
         name_employee: "harry potter",
         avatar_employee: "",
         function_employee: "bruxo",
         workload_employee: 8,
         email: "potter@gmail.com",
         password: "222",
         createdAt: new Date("2023-10-26T20:06:27.567Z"),
         updatedAt: new Date("2023-10-26T20:06:27.567Z"),
         deleted_at: null,
    }
    
  prismaMock.employees.create.mockResolvedValue(_user1)
   
    await expect(sutRepo.create(_user1)).resolves.toEqual({
      employee_id: "c176b1ce-4400-42b2-9121-0f28694b5050",
      name_employee: "harry potter",
      avatar_employee: "",
      function_employee:"bruxo",
      workload_employee: 8,
      email:"potter@gmail.com",
      password: "222",
      createdAt: new Date("2023-10-26T20:06:27.567Z"),
      updatedAt: new Date("2023-10-26T20:06:27.567Z"),
      deleted_at: null,
    });
    
  })
