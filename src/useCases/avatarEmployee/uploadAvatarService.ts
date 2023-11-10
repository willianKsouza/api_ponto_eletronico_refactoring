import { IUpload } from "../../shared/interfaces/IUploadFile";
import { apiError } from "../../shared/middlewares/AppError";

export class AvatarEmployeeService {
  constructor(private saveCloudStorage: IUpload) {}
  async execute(file: any) {
    try {
      const saveCloud = await this.saveCloudStorage.uploadFile(file);
      return saveCloud;
    } catch (error) {
      
      
      throw new apiError('erro no service atavat', 500)
    }
  }
}
