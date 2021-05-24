import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeGetFriendListController } from "../factories/controllers/get-friend-list-controller-factory";
import { makeSearchUserController } from "../factories/controllers/search-user-factory";
import { auth } from "../middlewares/auth";



export default (router: Router): void => {
    router.get('/searchUser?:user', auth, adaptRouter(makeSearchUserController()))
    router.get('/getFriendList?:idUser', auth, adaptRouter(makeGetFriendListController()))
}