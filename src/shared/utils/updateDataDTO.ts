import { z } from "zod";
import { apiError } from "../middlewares/AppError";


export function CreateDataDTO() {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      const createEmployeeSchema = z.object({
        name_employee: z.string().min(2),
        function_employee: z.string(),
        workload_employee: z.literal(8),
        email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        password: z.string(),
      });
      const resultValidator = createEmployeeSchema.safeParse(args[0]);
      if (resultValidator.success) {
        return originalMethod.apply(this, [resultValidator.data]);
      } else {
        throw JSON.stringify({
          zod: `erro na validaçao do zod padrão nao aceito`,
        });
      }
    };

    return descriptor;
  };
}
