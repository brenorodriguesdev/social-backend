import { Message } from "../models/message";

export interface MessageRepository {
    create(message: Message): Promise<void>
    lastMessage(idChat: number): Promise<Message>
}