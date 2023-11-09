import { IUpload } from "../../shared/interfaces/IUploadFile";
import { apiError } from "../../shared/middlewares/AppError";

export class AvatarEmployeeService {
  constructor(private saveCloudStorage: IUpload) {}
  async execute(file: any) {
    try {
      // console.log(file);
      
      const saveCloud = await this.saveCloudStorage.uploadFile(file);
      console.log(saveCloud);
      
      return saveCloud;
    } catch (error) {
      console.log(error);
      
      throw new apiError('erro no service atavat', 500)
    }
  }
}
