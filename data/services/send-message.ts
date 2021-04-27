import { SendMessageModel } from "../../domain/models/send-message";
import { SendMessageUseCase } from "../../domain/useCases/send-message";
import { NotFoundError, UnauthorizedError } from "../../presentation/errors";
import { ChatRepository } from "../contracts/chat-repository";
import { FriendListRepository } from "../contracts/friend-list-repository";
import { MessageRepository } from "../contracts/message-repository";

export class SendMessageService implements SendMessageUseCase {
    constructor(private readonly friendListRepository: FriendListRepository, private readonly chatRepository: ChatRepository, private readonly messageRepository: MessageRepository) { }
    async send(sendMessageModel: SendMessageModel): Promise<void | Error> {
        const areFriends = await this.friendListRepository.areFriends(sendMessageModel.idSender, sendMessageModel.idReceiver)
        if (!areFriends) {
            return new UnauthorizedError('Você não pode enviar message, para um pessoa que não é sua amiga!')
        }
        let alreadyChat = await this.chatRepository.findByUsers(sendMessageModel.idSender, sendMessageModel.idReceiver)
        if (!alreadyChat) {
            alreadyChat = await this.chatRepository.create({
                id_sender: sendMessageModel.idSender,
                id_receiver: sendMessageModel.idReceiver
            })
        }
        await this.messageRepository.create({
            id_chat: alreadyChat.id,
            message: sendMessageModel.message,
            id_sender: sendMessageModel.idSender,
            id_receiver: sendMessageModel.idReceiver
        })
    }
}