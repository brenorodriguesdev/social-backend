import { InviteModel } from "../../domain/models/invite";
import { GetInviteListUseCase } from "../../domain/useCases/get-invite-list";
import { InviteRepository } from "../contracts";

export class GetInviteListService implements GetInviteListUseCase {
    constructor(private readonly inviteRepository: InviteRepository) { }
    async get(idUser: number): Promise<InviteModel[]> {
        const invites = await this.inviteRepository.findByGuest(idUser)
        return invites.map(invite => {
            return {
                id: invite.id,
                name: invite.name
            }
        })
    }
}