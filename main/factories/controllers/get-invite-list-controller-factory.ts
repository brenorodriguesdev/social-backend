
import { GetInviteListService } from "../../../data/services/get-invite-list";
import { InviteRepositoryPostgres } from "../../../infra/invite-repository";
import { GetInviteListController } from "../../../presentation/controllers/get-invite-list";


export const makeGetInviteListController = (): GetInviteListController => {
    const inviteRepositoryPostgres = new InviteRepositoryPostgres()
    const getInviteListService = new GetInviteListService(inviteRepositoryPostgres)
    return new GetInviteListController(getInviteListService)
}