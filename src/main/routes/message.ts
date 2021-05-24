import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeSendMessageController } from "../factories/controllers/send-message-controller-factor";
import { auth } from "../middlewares/auth";


export default (router: Router): void => {
    router.post('/sendMessage', auth, adaptRouter(makeSendMessageController()))
}