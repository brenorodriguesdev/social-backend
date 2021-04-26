import { SignInService } from "../../../data/services/sign-in";
import { Bcrypt } from "../../../infra/bcrypt";
import { JsonWebToken } from "../../../infra/jsonwebtoken";
import { UserRepositoryPostgres } from "../../../infra/userRepository";
import { SignInController } from "../../../presentation/controllers/sign-in";
import { makeSignInValidation } from "../validations/sign-in-validation-factory";

export const makeSignInController = (): SignInController => {
    const userRepositoryPostgres = new UserRepositoryPostgres()
    const bcrypt = new Bcrypt(8)
    const jsonwebtoken = new JsonWebToken('secret_key')
    const signInService = new SignInService(userRepositoryPostgres, bcrypt, jsonwebtoken)
    return new SignInController(makeSignInValidation(), signInService)
}