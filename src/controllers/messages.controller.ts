import { Request, Response } from "express";
import { MessagesService } from "../services/messages.service";

class MessagesController {
  constructor() {}

  async handleCreate(request: Request, response: Response) {
    const { message } = request.body;
    const service = new MessagesService();
    const result = await service.createMessage(message, request.user_id);

    return response.json(result);
  }

  async handleGetLastThree(request: Request, response: Response) {
    // const { message } = request.body;
    const service = new MessagesService();
    const result = await service.getLastThree();

    return response.json(result);
  }
}

export { MessagesController };
