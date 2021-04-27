import { Chat } from "../models/chat";

export interface ChatRepository {
    create(chat: Chat): Promise<Chat>
}