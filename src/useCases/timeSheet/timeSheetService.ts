import { IDataMark } from "../../shared/interfaces/IDataMark";
import {
  IFindOneRepository,
  IUpdateRepository,
} from "../../shared/interfaces/IEmployeeRepository";
import {
  ICreateTimeSheetRepository,
  IFindOneTimeSheetRepository,
  ITimeSheetUpdateRepository,
} from "../../shared/interfaces/ITimeSheetRepository";
import { apiError } from "../../shared/middlewares/AppError";
import { calcOfHours } from "../../shared/utils/calcOfHours";

export class TimeSheetService {
  constructor(
    private timeSheet: IFindOneTimeSheetRepository,
    private timeSheetUpdate: ITimeSheetUpdateRepository,
    private timeSheetCreate: ICreateTimeSheetRepository
  ) {}
  async execute(data: IDataMark) {
    const {
      current_time_stamp,
      time_sheet_id,
      employee_id,
      type_marking,
      work_load,
    } = data;

    const sheetID = time_sheet_id ?? '0';
    const timeSheet = await this.timeSheet.findOne(sheetID);

    
    if (timeSheet && time_sheet_id) {
      switch (type_marking) {
        case "launch_in":
          if (!timeSheet.launch_in) {
            try {
             const employeeTimeSheet = await this.timeSheetUpdate.update(time_sheet_id, {
                launch_in: current_time_stamp,
              });
              return employeeTimeSheet;
            } catch (error) {
              return new apiError(error.message, 400);
            }
          }
        case "launch_out":
          if (!timeSheet.launch_out) {
            try {
              const employeeTimeSheet = await this.timeSheetUpdate.update(
                time_sheet_id,
                {
                  launch_out: current_time_stamp,
                }
              );
              return employeeTimeSheet;
            } catch (error) {
              
              
              return new apiError(error.message, 400);
            }
          }
        case "out_time":
          if (!timeSheet.out_time) {
            try {
              const results = calcOfHours(timeSheet);
             const employeeTimeSheet = await this.timeSheetUpdate.update(
               time_sheet_id,
               {
                 out_time: current_time_stamp,
                 hours_worked: results.hoursWorked,
                 owed_hours: results.owedHours,
                 overtime: results.overTime,
               }
             );
              return employeeTimeSheet;
            } catch (error) {
              return new apiError(error.message, 400);
            }
          }
      }
    } else {
      try {
        const employeeTimeSheet = await this.timeSheetCreate.create({
          employee_id: employee_id,
          work_load: work_load,
          in_time: current_time_stamp,
        });
        return employeeTimeSheet;
      
      } catch (error) {
        return new apiError(error.messagem, 400);
      }
    }
  }
}
