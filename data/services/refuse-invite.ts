import { RefuseInviteUseCase } from "../../domain/useCases/refuse-invite";
import { NotFoundError } from "../../presentation/errors";
import { InviteRepository } from "../contracts";

export class RefuseInviteService implements RefuseInviteUseCase {
    constructor(private readonly inviteRepository: InviteRepository) { }
    async refuse(id: number): Promise<void | Error> {
        const invite = await this.inviteRepository.findById(id)
        if (!invite) {
            return new NotFoundError('Esse convite não existe!')
        }
        await this.inviteRepository.deleteById(id)
    }
}