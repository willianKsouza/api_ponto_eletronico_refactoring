import { UploadFile } from "../../data/nhost/uploadFile";
import { AvatarEmployeeService } from "./uploadAvatarService";
import { ControllerAvatarEmployee } from "./controllerAvatarEmployee";

const uploadFile = new UploadFile();
const avatarEmployeeService = new AvatarEmployeeService(uploadFile);
const controllerAvatarEmployee = new ControllerAvatarEmployee(
  avatarEmployeeService
);

export { controllerAvatarEmployee };
