import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { json } from "stream/consumers";

export function isAuthJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ auth: false, message: "No token provided." });
  }

  verify(token, process.env.SECRET as string, (err: any, decoded: any) => {
    if (err) {
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });
    }
    if (decoded) {
      const { employee_id } = JSON.parse(decoded.user);
      req.body.employee_id = employee_id;
      next();
    }
  });
}
