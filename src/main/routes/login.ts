import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeCreateUserController, makeSignInController } from "../factories/controllers";


export default (router: Router): void => {
    router.post('/signUp', adaptRouter(makeCreateUserController()))
    router.post('/signIn',adaptRouter(makeSignInController()))
}