import { ResetPasswordService } from "./resetPasswordService";
import { FindOneRepository, UpdateRepository, FindByTokenRepository } from "../../../../data/prisma/repositories/userRepository";
import { ControllerResetPassword } from "./controllerResetPassword";



const updateRepository = new UpdateRepository();
const findByTokenRepository = new FindByTokenRepository();
const findOneRepository = new FindOneRepository();
const resetPasswordService = new ResetPasswordService(
  findOneRepository,
  updateRepository,
  findByTokenRepository
);

const controllerResetPassword = new ControllerResetPassword(
  resetPasswordService
);

export { controllerResetPassword}