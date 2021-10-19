import { Router } from "express";
import { AuthController } from "./controllers/auth.controller";
import { MessagesController } from "./controllers/messages.controller";
import { ProfilesController } from "./controllers/profiles.controller";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post("/authenticate", new AuthController().handle);

router.post(
  "/messages",
  isAuthenticated,
  new MessagesController().handleCreate
);

router.get("/messages", new MessagesController().handleGetLastThree);

router.get(
  "/profile",
  isAuthenticated,
  new ProfilesController().handleGetUserProfile
);

export { router };
