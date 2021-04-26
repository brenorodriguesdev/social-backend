
import { SendInviteService } from "../../../data/services/send-invite";
import { InviteRepositoryPostgres } from "../../../infra/inviteRepository";
import { UserRepositoryPostgres } from "../../../infra/userRepository";
import { SendInviteController } from "../../../presentation/controllers/send-invite";
import { makeSendInviteValidation } from "../validations/send-invite-validation-factory";


export const makeSendInviteController = (): SendInviteController => {
    const userRepositoryPostgres = new UserRepositoryPostgres()
    const inviteRepositoryPostgres = new InviteRepositoryPostgres()
    const sendInviteService = new SendInviteService(userRepositoryPostgres, inviteRepositoryPostgres)
    return new SendInviteController(makeSendInviteValidation(), sendInviteService)
}