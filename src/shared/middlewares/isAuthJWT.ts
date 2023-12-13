import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function isAuthJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ auth: false, message: "No token provided." });
  }

  verify(token, process.env.SECRET as string, (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });
    }
    if (decoded) {
      req.body.token = decoded;
       next()
    }
  });
}
