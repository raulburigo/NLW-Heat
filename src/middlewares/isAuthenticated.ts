import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ errorCode: "token.invalid" });
  }

  try {
    const [, token] = authToken.split(" ");
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;
    request.user_id = sub;
    next();
  } catch (error) {
    return response.status(401).json({ errorCode: "token.expired" });
  }
}
