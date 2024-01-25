import { Request, Response } from "express";
import { TimeSheetService } from "./timeSheetService";

export class ControllerTimeSheet {
  constructor(private sheetService: TimeSheetService) {}
  async mark(req: Request, res: Response) {
    const {
      current_time_stamp,
      employee_id,
      time_sheet_id,
      type_marking,
      work_load,
    } = req.body;
      
     try {
         const timeSheetService = await this.sheetService.execute({
           current_time_stamp,
           employee_id,
           time_sheet_id,
           type_marking,
           work_load,
         });

         return res.status(200).json({timeSheetService });
     } catch (error) {
        return res.status(error.statusCode).json({ data: error.message });
     }
  }
}
