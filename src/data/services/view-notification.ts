import { ViewNotificationUseCase } from "../../domain/useCases/view-notification";
import { InviteRepository } from "../contracts";

export class ViewNotificationService implements ViewNotificationUseCase {
    constructor(private readonly inviteRepository: InviteRepository) { }
    async view(idUser: number): Promise<void> {
        await this.inviteRepository.setViewByGuest(idUser)
    }
}