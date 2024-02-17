import { IUpdateRepository } from "../../../shared/interfaces/IEmployeeRepository";
import { ITimesheet } from "../../../shared/interfaces/ITimeSheet";
import { ICreateTimeSheetRepository, IFindOneTimeSheetRepository, ITimeSheetUpdateRepository } from "../../../shared/interfaces/ITimeSheetRepository";
import { prisma } from "../connectDb";


export class UpdateTimeSheetRepository implements ITimeSheetUpdateRepository {
  async update(
    id: string,
    param: Partial<ITimesheet>
  ): Promise<ITimesheet | null> {
    const timeSheet = await prisma().timesheet.update({
      where: {
        time_sheet_id: id,
      },
      data: param,
    });
    return timeSheet;
  }
}

export class FindOneTimeSheetRepository implements IFindOneTimeSheetRepository {
  async findOne(id: string): Promise<ITimesheet | null> {
    const timesheet = await prisma().timesheet.findFirst({
      where: {
        time_sheet_id: id,
      },
    });
    return timesheet;
  }
}


export class CreateTimeSheetRepository implements ICreateTimeSheetRepository {
  async create(
    param: Omit<ITimesheet, "time_sheet_id">
  ): Promise<ITimesheet | null> {
    const timeSheet = await prisma().timesheet.create({ data: param });
    return timeSheet;
  }
}