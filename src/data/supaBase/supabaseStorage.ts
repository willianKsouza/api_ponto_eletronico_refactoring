// import { NhostClient } from "@nhost/nhost-js";
// import { IUpload } from "../../shared/interfaces/IUploadFile";
// import fs from "fs";
// import path from "path";
// import FormData from "form-data";
// export class UploadFile implements IUpload {
//   async uploadFile(file: any) {

//     const nhost = new NhostClient({
//       subdomain: process.env.NHOST_SUB_DOMAIN,
//       region: process.env.NHOST_REGION,
//       adminSecret: process.env.NHOST_ADMIN_SECRET,
//     });

//     const pathImagem = `${uploadFolder}/${file.filename}`;

//     const dataImg = new FormData();
//     dataImg.append("file", fs.createReadStream(pathImagem));
//     const nhostUplod = await nhost.storage.upload({ formData: dataImg });

//     return nhostUplod;
//   }
// }

import { supabase } from "./connnectSupaBase";
import {
  IUploadAvatar,
  IGetAvatarUrl,
  IDeleteFile,
} from "../../shared/interfaces/ISupaBase";

import fs from "fs";
import { apiError } from "../../shared/middlewares/AppError";

export class UploadFile implements IUploadAvatar {
  async uploadFile(file: any) {
    const pathImg = fs.readFileSync(file.path);

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(file.filename, pathImg, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw new apiError("nao foi possivel receber a imagem", 400);
    }

    return "sucess";
  }
}
export class GetAvatarUrl implements IGetAvatarUrl {
  async getUrl(filename: string) {
    try {
      const { data } = supabase.storage.from("avatars").getPublicUrl(filename);
      return data;
    } catch (error) {
      throw new apiError(error.message, 400);
    }
  }
}

export class DeleteFileStorage implements IDeleteFile {
  async deleteFileStorage(fileName: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .remove([fileName]);
      if (error) {
        throw new apiError(error.message, 400);
      }

      return data;
    } catch (error) {
      throw new apiError(error.message, 400);
    }
  }
}
