import { ChatMessage } from "../../domain/models/chatMessage";
import { GetChatUseCase } from "../../domain/useCases/get-chat";
import { UnauthorizedError } from "../../presentation/errors";
import { ChatRepository } from "../contracts/chat-repository";
import { MessageRepository } from "../contracts/message-repository";

export class GetChatService implements GetChatUseCase {
    constructor(private readonly chatRepository: ChatRepository, private readonly messageRepository: MessageRepository) { }
    async get(idUser: number, idChat: number): Promise<ChatMessage[] | Error> {
        const isMeChat = await this.chatRepository.findByUser(idUser)
        if (!isMeChat) {
            return new UnauthorizedError('Você não pertence a essa conversa!')
        }
        const messages = await this.messageRepository.findAllMessage(idChat)
        const chatMessageList = messages.map((message): ChatMessage => {
            return {
                id_sender: isMeChat.id_sender,
                message: message.message
            }
        })

        return chatMessageList
    }
}