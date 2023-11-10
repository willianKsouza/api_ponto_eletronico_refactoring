import { Request, Response } from "express";
import { AvatarEmployeeService } from "./uploadAvatarService";

export class ControllerAvatarEmployee {
    constructor(private avatarEmployee: AvatarEmployeeService) { }
    async uploadFile(req: Request, res: Response) {
        try {
            const file = await this.avatarEmployee.execute(req.file);
            return res.status(200).json({ data: file });
        } catch (error) {
           return res.status(error.statusCode).json({ data: error.message });
            
        }
    }
}