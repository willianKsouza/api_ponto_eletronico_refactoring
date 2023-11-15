export interface IUser {
  employee_id: string;
  name_employee: string;
  avatar_employee?: string | null;
  avatar_path?: string | null;
  function_employee: string;
  workload_employee: number;
  email: string;
  password: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deleted_at?: Date | string | null;
}



