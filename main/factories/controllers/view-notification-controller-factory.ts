
import { ViewNotificationService } from "../../../data/services/view-notification";
import { InviteRepositoryPostgres } from "../../../infra/invite-repository";
import { ViewNotificationController } from "../../../presentation/controllers/view-notification";


export const makeViewNotificationController = (): ViewNotificationController => {
    const inviteRepositoryPostgres = new InviteRepositoryPostgres()
    const viewNotificationService = new ViewNotificationService(inviteRepositoryPostgres)
    return new ViewNotificationController(viewNotificationService)
}