import { ChatMessage } from "../../domain/models/chatMessage";
import { GetChatUseCase } from "../../domain/useCases/get-chat";

export class GetChatService implements GetChatUseCase {
    async get(idUser: number, idChat: number): Promise<ChatMessage[]> {

    }
}