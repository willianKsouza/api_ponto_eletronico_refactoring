
import { Router } from "express";
import { controllerTimeSheet } from "../../useCases/timeSheet/coalescence";


const timeSheetRouter = Router();

timeSheetRouter.post("/", (req, res) =>
  controllerTimeSheet.mark(req, res)
);

export { timeSheetRouter };