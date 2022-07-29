import { NextFunction, Request, Response } from "express";

export class BaseError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends BaseError {}

export function handleError(
  res?: Response,
  statusCode?: number,
  message?: string
) {
  return (error: Error) => {
    return res.status(statusCode).json({ message: message || error.message });
  };
}

export function catchErrors(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response {
  return res.status(500).json({ message: "Something went wrong" });
}

export class AuthenticationError extends BaseError {}
