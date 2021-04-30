import { SearchUserService } from "../../../data/services/search-user";
import { FriendListRepositoryPostgres } from "../../../infra/friend-list-repository";
import { UserRepositoryPostgres } from "../../../infra/user-repository";
import { SearchUserController } from "../../../presentation/controllers/search-user";
import { makeSearchUserValidation } from "../validations/search-user-validation-factory";

export const makeSearchUserController = (): SearchUserController => {
    const userRepositoryPostgres = new UserRepositoryPostgres()
    const friendListRepositoryPostgres = new FriendListRepositoryPostgres()
    const searchUserService = new SearchUserService(userRepositoryPostgres, friendListRepositoryPostgres)
    return new SearchUserController(makeSearchUserValidation(), searchUserService)
}