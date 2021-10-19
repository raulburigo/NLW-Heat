import { Request, Response } from "express";
import { ProfilesService } from "../services/profiles.service";

class ProfilesController {
  constructor() {}

  async handleGetUserProfile(request: Request, response: Response) {
    const service = new ProfilesService();
    const result = await service.getUserProfile(request.user_id);

    return response.json(result);
  }
}

export { ProfilesController };
