import { IRepository } from "../../../../shared/interfaces/IRepository";
import { CreateEmployee } from "../createEmployeeService";
const createEmployeeRepo: jest.Mocked<Pick<IRepository, "create">> = {
  create: jest.fn().mockResolvedValue({ chave: "valor" }),
};



/* eslint-disable @typescript-eslint/no-explicit-any */
describe('#$#Create', () => {
  it('verificar se o metodo é chamado apenas uma vez',async () => {
    const sut = new CreateEmployee(createEmployeeRepo);
    await sut.execute({
      chave: 'valor'
    } as any);
    expect(createEmployeeRepo.create).toHaveBeenCalledTimes(1)
    expect(createEmployeeRepo.create).toHaveBeenCalledWith({
      chave: "valor",
    } as any);
   

  })



  it('verificar se o metodo é chamado apenas uma vez', async () => {
    const sut = new CreateEmployee(createEmployeeRepo);
    const employeeFake = createEmployeeRepo.create.mockResolvedValue({
      chave: "valor",
    } as any);
 
    expect(await sut.execute({ chave: "valor" } as any)).toEqual({ chave: "valor" });
    
    
  });

   

  })

