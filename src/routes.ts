import {Router} from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { Get3LastMessagesController } from './controllers/Get3LastMessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { EnsureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();


router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", EnsureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new Get3LastMessagesController().handle)

router.get("/profile",EnsureAuthenticated, new ProfileUserController().handle)
export {router};