import { CreateUserService } from "../../../data/services/create-user";
import { CreateUserController } from "../../../presentation/controllers/create-user";
import { makeCreateUserValidation } from "../validations/create-user-validation-factory";
import { Bcrypt } from "../../../infra/bcrypt";
import { UserRepositoryPostgres } from "../../../infra/user-repository";


export const makeCreateUserController = (): CreateUserController => {
    const userRepositoryPostgres = new UserRepositoryPostgres()
    const bcrypt = new Bcrypt(8)
    const createUserService = new CreateUserService(bcrypt, userRepositoryPostgres)
    return new CreateUserController(makeCreateUserValidation(), createUserService)
}