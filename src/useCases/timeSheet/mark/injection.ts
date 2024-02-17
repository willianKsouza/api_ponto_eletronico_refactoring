import {
  CreateTimeSheetRepository,
  FindOneTimeSheetRepository,
  UpdateTimeSheetRepository,
} from "../../../data/prisma/repositories/timeSheetRepository";
import { UpdateRepository } from "../../../data/prisma/repositories/userRepository";
import { ControllerTimeSheet } from "./controllerTimeSheet";
import { TimeSheetService } from "./timeSheetService";

const updateTimeSheetRepository = new UpdateTimeSheetRepository();

const findOneTimeSheetRepository = new FindOneTimeSheetRepository();

const createTimeSheetRepository = new CreateTimeSheetRepository();
const employeeUpdateRepository = new UpdateRepository()

const timeSheetService = new TimeSheetService(
  findOneTimeSheetRepository,
  updateTimeSheetRepository,
  createTimeSheetRepository,
  employeeUpdateRepository
);

const controllerTimeSheet = new ControllerTimeSheet(timeSheetService);

export { controllerTimeSheet };
