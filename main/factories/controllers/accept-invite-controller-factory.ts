
import { AcceptInviteService } from "../../../data/services/accept-invite";
import { FriendListRepositoryPostgres } from "../../../infra/friend-list-repository";
import { InviteRepositoryPostgres } from "../../../infra/invite-repository";
import { AcceptInviteController } from "../../../presentation/controllers/accept-invite";
import { makeAcceptInviteValidation } from "../validations/accept-invite-validation-factory";
import { makeSendInviteValidation } from "../validations/send-invite-validation-factory";


export const makeAcceptInviteController = (): AcceptInviteController => {
    const friendListRepositoryPostgres = new FriendListRepositoryPostgres()
    const inviteRepositoryPostgres = new InviteRepositoryPostgres()
    const acceptInviteService = new AcceptInviteService(inviteRepositoryPostgres, friendListRepositoryPostgres)
    return new AcceptInviteController(makeAcceptInviteValidation(), acceptInviteService)
}