import prismaClient from "../prisma";
import { io } from "../app";

class MessagesService {
  async createMessage(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: { text, user_id },
      include: { user: true },
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.createdAt,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit("new_message", infoWS);
    return message;
  }

  async getLastThree() {
    const lastMessages = await prismaClient.message.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });
    return lastMessages;
  }
}

export { MessagesService };
