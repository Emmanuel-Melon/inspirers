import { NextFunction, Response } from "express";
import { decode, sign, verify } from 'jsonwebtoken';

import { getUserById } from "../users/controller";

import { secret } from "../config";


export default function authenticate(
  req: any,
  res: Response,
  next: NextFunction
) {
  const tokenInQuery = req.query.access_token;
  const tokenInHeader = req.header("Authorization") || "";
  const token = tokenInQuery || tokenInHeader.replace(/Bearer\s+/, "");

  if (!token) {
    res.status(401).json({ message: "unauthorized" });
  }

  if (token) {
    const decoded = decode(token);
    req.user = decoded;
    next();
  }
}
