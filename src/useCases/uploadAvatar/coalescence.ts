import { DeleteFileStorage, GetAvatarUrl, UploadFile } from "../../data/supaBase/supabaseStorage";
import { UploadAvatarService } from "./uploadAvatarService";
import { ControllerUploadAvatar } from "./controllerUploadAvatar";
import { FindOneRepository, UpdateRepository } from "../../data/prisma/repositories/prismaRepository";

const uploadFile = new UploadFile();
const getAvatarUrl = new GetAvatarUrl()
const employee = new FindOneRepository()
const UpdateEmployee = new UpdateRepository()
const deleteFileStorage = new DeleteFileStorage();

const avatarEmployeeService = new UploadAvatarService(
  employee,
  uploadFile,
  getAvatarUrl,
  UpdateEmployee,
  deleteFileStorage
);
const controllerAvatarEmployee = new ControllerUploadAvatar(
  avatarEmployeeService
);

export { controllerAvatarEmployee };
