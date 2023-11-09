import { NhostClient } from "@nhost/nhost-js";
import { IUpload } from "../../shared/interfaces/IUploadFile";
import fs from "fs";
import path from "path";
import FormData from "form-data";
export class UploadFile implements IUpload {
  async uploadFile(file: any) {
    const nhost = new NhostClient({
      subdomain: process.env.NHOST_SUB_DOMAIN,
      region: process.env.NHOST_REGION,
      adminSecret: process.env.NHOST_ADMIN_SECRET,
    });
console.log(file);

    
    const uploadFolder = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "uploads"
    );


    const pathImagem = `${uploadFolder}/${file.filename}`;

    
    const dataImg = new FormData();
     console.log(dataImg);
    dataImg.append("fileEmployee", fs.createReadStream(pathImagem));
    console.log(dataImg);
    
      // console.log('vindo de uploadFile', dataImg);
    const nhostUplod = await nhost.storage.upload({ formData: dataImg });
    console.log(nhostUplod);
    
    return nhostUplod;
  }
}
