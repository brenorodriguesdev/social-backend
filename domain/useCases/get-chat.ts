import { Chat } from "../../data/models/chat";

export interface GetChatUseCase {
    get(idUser: number, idChat: number): Promise<Chat>
}