
import { SendInviteService } from "../../../data/services/send-invite";
import { FriendListRepositoryPostgres } from "../../../infra/friend-list-repository";
import { InviteRepositoryPostgres } from "../../../infra/invite-repository";
import { UserRepositoryPostgres } from "../../../infra/user-repository";
import { SendInviteController } from "../../../presentation/controllers/send-invite";
import { makeSendInviteValidation } from "../validations/send-invite-validation-factory";


export const makeSendInviteController = (): SendInviteController => {
    const userRepositoryPostgres = new UserRepositoryPostgres()
    const inviteRepositoryPostgres = new InviteRepositoryPostgres()
    const friendListRepositoryPostgres = new FriendListRepositoryPostgres()
    const sendInviteService = new SendInviteService(userRepositoryPostgres, inviteRepositoryPostgres, friendListRepositoryPostgres)
    return new SendInviteController(makeSendInviteValidation(), sendInviteService)
}