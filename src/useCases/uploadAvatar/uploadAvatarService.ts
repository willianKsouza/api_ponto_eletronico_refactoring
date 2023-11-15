import {
  IFindOneRepository,
  IUpdateRepository,
} from "../../shared/interfaces/IRepository";
import {
  IDeleteFile,
  IGetAvatarUrl,
  IUploadAvatar,
} from "../../shared/interfaces/ISupaBase";
import { apiError } from "../../shared/middlewares/AppError";
import fs from "fs";
export class UploadAvatarService {
  constructor(
    private employee: IFindOneRepository,
    private saveCloudStorage: IUploadAvatar,
    private getAvatarUrl: IGetAvatarUrl,
    private UpdateEmployee: IUpdateRepository,
    private DeleteFileStorage: IDeleteFile
  ) {}
  async execute(id: string, objFile: Express.Multer.File) {
    const employee = await this.employee.findOne(id);
    if (employee && employee.avatar_path) {
      try {
        const saveCloud = await this.saveCloudStorage.uploadFile(objFile);
        const getUrl = await this.getAvatarUrl.getUrl(objFile.filename);

        // const deletedFile = await this.DeleteFileStorage.deleteFileStorage(
        //   employee.
        // );

        const employee = await this.UpdateEmployee.update(id, {
          avatar_employee: getUrl.publicUrl,
        });
      } catch (error) {
        throw new apiError(error.message, 500);
      }

      fs.unlink(employee.avatar_path, (error) => {
        if (error) {
          throw new apiError(error.message, 400);
        }
      });
    }
  }
}
// try {
//   const deletedFile = await this.DeleteFileStorage.deleteFileStorage(
//     objFile
//   );
//   const saveCloud = await this.saveCloudStorage.uploadFile(objFile);
//   if (saveCloud) {
//     const getUrl = await this.getAvatarUrl.getUrl(objFile.filename);
//     const employee = await this.UpdateEmployee.update(id, {
//       avatar_employee: getUrl.publicUrl,
//     });
//     fs.unlink(objFile.path, (error) => {
//       if (error) {
//         throw new apiError(error.message, 400);
//       }
//     });
//     return {
//       saveCloud: saveCloud,
//       deletedFile: deletedFile,
//     };
//   }
// } catch (error) {
//   throw new apiError("erro no service avatar", 500);
// }
