import { GetCountNotificationUseCase } from "../../domain/useCases/get-count-notification";
import { InviteRepository } from "../contracts";

export class GetCountNotificationService implements GetCountNotificationUseCase {
    constructor(private readonly inviteRepository: InviteRepository) { }
    async get(idUser: number): Promise<number> {
        return await this.inviteRepository.count(idUser)
    }
}