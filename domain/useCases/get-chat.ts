import { ChatMessage } from "../models/chatMessage";

export interface GetChatUseCase {
    get(idUser: number, idChat: number): Promise<ChatMessage | Error>
}