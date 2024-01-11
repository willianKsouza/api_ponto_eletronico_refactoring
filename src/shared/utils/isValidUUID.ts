import { NextFunction, Request, Response } from "express";

export function isValidUUID(req: Request, res: Response, next: NextFunction) {
  const { uuid } = req.body;
  const pattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (pattern.test(uuid)) {
    next();
  }
  return res.json({ data: 'token nao encontrado'})
}
