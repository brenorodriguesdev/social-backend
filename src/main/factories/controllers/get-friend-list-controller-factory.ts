
import { GetFriendListService } from "../../../data/services/get-friend-list";
import { FriendListRepositoryPostgres } from "../../../infra/friend-list-repository";
import { GetFriendListController } from "../../../presentation/controllers/get-friend-list";
import { makeGetFriendListValidation } from "../validations/get-friend-list-validation-factory";


export const makeGetFriendListController = (): GetFriendListController => {
    const friendListRepositoryPostgres = new FriendListRepositoryPostgres()
    const getFriendListService = new GetFriendListService(friendListRepositoryPostgres)
    return new GetFriendListController(makeGetFriendListValidation(), getFriendListService)
}