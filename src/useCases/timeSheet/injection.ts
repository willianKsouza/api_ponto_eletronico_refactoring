import {
  CreateTimeSheetRepository,
  FindOneTimeSheetRepository,
  UpdateTimeSheetRepository,
} from "../../data/prisma/repositories/timeSheetRepository";
import { ControllerTimeSheet } from "./controllerTimeSheet";
import { TimeSheetService } from "./timeSheetService";

const updateTimeSheetRepository = new UpdateTimeSheetRepository();

const findOneTimeSheetRepository = new FindOneTimeSheetRepository();

const createTimeSheetRepository = new CreateTimeSheetRepository();

const timeSheetService = new TimeSheetService(
  findOneTimeSheetRepository,
  updateTimeSheetRepository,
  createTimeSheetRepository
);

const controllerTimeSheet = new ControllerTimeSheet(timeSheetService);

export { controllerTimeSheet };
