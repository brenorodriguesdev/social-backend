import { ChatMessage } from "../../domain/models/chatMessage";
import { GetChatUseCase } from "../../domain/useCases/get-chat";
import { UnauthorizedError } from "../../presentation/errors";
import { ChatRepository } from "../contracts/chat-repository";

export class GetChatService implements GetChatUseCase {
    constructor(private readonly chatRepository: ChatRepository) { }
    async get(idUser: number, idChat: number): Promise<ChatMessage[] | Error> {
        const isMeChat = await this.chatRepository.findByUser(idUser)
        if (!isMeChat) {
            return new UnauthorizedError('Você não pertence a essa conversa!')
        }
    } 
}