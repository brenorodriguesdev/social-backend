import { SearchUserService } from "../../../data/services/search-user";
import { UserRepositoryPostgres } from "../../../infra/user-repository";
import { SearchUserController } from "../../../presentation/controllers/search-user";
import { makeSearchUserValidation } from "../validations/search-user-validation-factory";

export const makeSearchUserController = (): SearchUserController => {
    const userRepositoryPostgres = new UserRepositoryPostgres()
    const searchUserService = new SearchUserService(userRepositoryPostgres)
    return new SearchUserController(makeSearchUserValidation(), searchUserService)
}