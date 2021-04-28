import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeSearchUserController } from "../factories/controllers/search-user-factory";
import { auth } from "../middlewares/auth";



export default (router: Router): void => {
    router.get('/searchUser', auth, adaptRouter(makeSearchUserController()))
}