import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeGetAllChatController } from "../factories/controllers/get-all-chat-controller-factory";
import { makeGetChatController } from "../factories/controllers/get-chat-controller-factory";
import { auth } from "../middlewares/auth";


export default (router: Router): void => {
    router.get('/getAllChat', auth, adaptRouter(makeGetAllChatController()))
    router.get('/getChat/:idChat', auth, adaptRouter(makeGetChatController()))

}