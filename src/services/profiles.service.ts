import prismaClient from "../prisma";

class ProfilesService {
  async getUserProfile(user_id: string) {
    const user = await prismaClient.user.findUnique({ where: { id: user_id } });
    return user;
  }
}

export { ProfilesService };
