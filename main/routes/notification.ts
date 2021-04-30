import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeGetCountNotificationController } from "../factories/controllers/get-count-notification-controller-factory";
import { makeViewNotificationController } from "../factories/controllers/view-notification-controller-factory";
import { auth } from "../middlewares/auth";


export default (router: Router): void => {
    router.put('/viewNotification', auth, adaptRouter(makeViewNotificationController()))
    router.get('/getCountNotification', auth, adaptRouter(makeGetCountNotificationController()))
}