import { AcceptInviteUseCase } from "../../domain/useCases/accept-invite";
import { AlreadyExistError, NotFoundError } from "../../presentation/errors";
import { InviteRepository } from "../contracts";
import { FriendListRepository } from "../contracts/friend-list-repository";

export class AcceptInviteService implements AcceptInviteUseCase {
    constructor(private readonly inviteRepository: InviteRepository, private readonly friendListRepository: FriendListRepository) { }
    async accept(id: number): Promise<void | Error> {
        const alreadyInvite = await this.inviteRepository.findById(id)
        if (!alreadyInvite) {
            return new NotFoundError('Esse convite não existe em nosso banco de dados!')
        }
        const { id_user, id_guest } = alreadyInvite

        const alreadyFriendList = await this.friendListRepository.findByUsers(id_user, id_guest)

        if (alreadyFriendList) {
            return new AlreadyExistError('Você já é amigo dessa pessoa!')
        }

        await this.friendListRepository.insert({
            id_user,
            id_guest
        })

        await this.inviteRepository.deleteById(id)
    }
}