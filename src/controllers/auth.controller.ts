import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

class AuthController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthService();
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (error) {
      return response.json(error.message);
    }
  }
}

export { AuthController };
