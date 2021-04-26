import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeSendInviteController } from "../factories/controllers/send-invite-controller-factory";
import { auth } from "../middlewares/auth";


export default (router: Router): void => {
    router.post('/invite', auth, adaptRouter(makeSendInviteController()))
}