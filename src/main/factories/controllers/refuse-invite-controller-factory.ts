
import { RefuseInviteService } from "../../../data/services/refuse-invite";
import { InviteRepositoryPostgres } from "../../../infra/invite-repository";
import { RefuseInviteController } from "../../../presentation/controllers/refuse-invite";
import { makeRefuseInviteValidation } from "../validations/refuse-invite-validation-factory";

export const makeRefuseInviteController = (): RefuseInviteController => {
    const inviteRepositoryPostgres = new InviteRepositoryPostgres()
    const refuseInviteService = new RefuseInviteService(inviteRepositoryPostgres)
    return new RefuseInviteController(makeRefuseInviteValidation(), refuseInviteService)
}