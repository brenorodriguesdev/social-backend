import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeGetCountNotificationController } from "../factories/controllers/get-count-notification-controller-factory";
import { auth } from "../middlewares/auth";


export default (router: Router): void => {
    router.get('/getCountNotification', auth, adaptRouter(makeGetCountNotificationController()))
}