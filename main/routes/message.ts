import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeSendMessageController } from "../factories/controllers/send-message-controller-factor";


export default (router: Router): void => {
    router.post('/sendMessage', adaptRouter(makeSendMessageController()))
}