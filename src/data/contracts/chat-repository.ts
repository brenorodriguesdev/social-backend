import { Chat } from "../models/chat";

export interface ChatRepository {
    create(chat: Chat): Promise<Chat>
    findByUsers(idSender: number, idReceiver: number): Promise<Chat>
    findByUser(idUser: number): Promise<Chat>
    findAllChat(idUser): Promise<Chat[]>
}