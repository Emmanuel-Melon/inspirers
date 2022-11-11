import { NextFunction, Request, Response } from "express";
export class BaseError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends BaseError {}

export function catchErrors(
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): Response {
  return res.status(res.statusCode || 500).json({ message: error.message || "Something went wrong" });
}

export class AuthenticationError extends BaseError {}
