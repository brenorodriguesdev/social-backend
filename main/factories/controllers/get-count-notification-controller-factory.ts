
import { GetCountNotificationService } from "../../../data/services/get-count-notification";
import { InviteRepositoryPostgres } from "../../../infra/invite-repository";
import { GetCountNotificationController } from "../../../presentation/controllers/get-count-notification";


export const makeGetCountNotificationController = (): GetCountNotificationController => {
    const inviteRepositoryPostgres = new InviteRepositoryPostgres()
    const getCountNotificationService = new GetCountNotificationService(inviteRepositoryPostgres)
    return new GetCountNotificationController(getCountNotificationService)
}