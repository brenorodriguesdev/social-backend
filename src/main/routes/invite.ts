import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeAcceptInviteController } from "../factories/controllers/accept-invite-controller-factory";
import { makeGetInviteListController } from "../factories/controllers/get-invite-list-controller-factory";
import { makeRefuseInviteController } from "../factories/controllers/refuse-invite-controller-factory";
import { makeSendInviteController } from "../factories/controllers/send-invite-controller-factory";
import { auth } from "../middlewares/auth";


export default (router: Router): void => {
    router.post('/sendInvite', auth, adaptRouter(makeSendInviteController()))
    router.post('/refuseInvite', auth, adaptRouter(makeRefuseInviteController()))
    router.post('/acceptInvite', auth, adaptRouter(makeAcceptInviteController()))
    router.get('/getInviteList', auth, adaptRouter(makeGetInviteListController()))
}