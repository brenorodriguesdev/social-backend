import { Chat } from "../models/chat";

export interface ChatRepository {
    create(chat: Chat): Promise<Chat>
    findByUsers(idSender: number, idReceiver: number): Promise<Chat>
}