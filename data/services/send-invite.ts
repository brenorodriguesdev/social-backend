import { SendInviteModel } from "../../domain/models/send-invite";
import { SendInviteUseCase } from "../../domain/useCases/send-invite";
import { NotFoundError, UnauthorizedError } from "../../presentation/errors";
import { UserRepository, InviteRepository, SocketSend } from "../contracts";

export class SendInviteService implements SendInviteUseCase {
    constructor(private readonly userRepository: UserRepository, private readonly inviteRepository: InviteRepository/*, private readonly socketSend: SocketSend*/) { }
    async send(invite: SendInviteModel): Promise<void | Error> {
        if (invite.id === invite.idGuest) {
            return new UnauthorizedError('Você não pode enviar um convite para si mesmo!')
        }
        const user = this.userRepository.findById(invite.id)
        if (!user) {
            return new NotFoundError('Seu usuário não existe em nosso banco de dados!')
        }
        const userGuest = this.userRepository.findById(invite.idGuest)
        if (!userGuest) {
            return new NotFoundError('O usuário convidado não existe em nosso banco de dados!')
        }
        const newInvite = await this.inviteRepository.create({
            id_user: invite.id,
            id_guest: invite.idGuest,
            view: false
        })
        // await this.socketSend.send(invite.idGuest, 'invite', {
        //     invite: newInvite
        // })
    }
}
