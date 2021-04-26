import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeAcceptInviteController } from "../factories/controllers/accept-invite-controller-factory";
import { makeSendInviteController } from "../factories/controllers/send-invite-controller-factory";
import { auth } from "../middlewares/auth";


export default (router: Router): void => {
    router.post('/sendInvite', auth, adaptRouter(makeSendInviteController()))
    router.post('/acceptInvite', auth, adaptRouter(makeAcceptInviteController()))
}