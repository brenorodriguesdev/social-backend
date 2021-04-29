
import { GetInviteListService } from "../../../data/services/get-invite-list";
import { InviteRepositoryPostgres } from "../../../infra/invite-repository";
import { GetInviteListController } from "../../../presentation/controllers/get-invite-list";
import { makeGetFriendListValidation } from "../validations/get-friend-list-validation-factory";


export const makeGetInviteListController = (): GetInviteListController => {
    const inviteRepositoryPostgres = new InviteRepositoryPostgres()
    const getInviteListService = new GetInviteListService(inviteRepositoryPostgres)
    return new GetInviteListController(getInviteListService)
}