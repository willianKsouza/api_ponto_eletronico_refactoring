import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { FindByEmailRepository } from "../../data/prisma/repositories/userRepository";
import { apiError } from "./AppError";

export async function isAuthADM(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const emailAdm = req.headers["email"] as string;
    const isAdm = await new FindByEmailRepository().findByEmail(emailAdm);
    if (isAdm?.function_employee == "admin") {
      next();
    }
    return res
      .status(403)
      .json({ auth: false, message: "usuario não autorizado" });
  } catch (error) {
    throw new apiError("ocorreu algum erro na autorizaçao", 400);
  }
}
