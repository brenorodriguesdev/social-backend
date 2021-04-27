import { MessageRepository } from "../data/contracts/message-repository";
import { Message } from "../data/models/message";
import { database } from "../main/config/database";

export class MessageRepositoryPostgres implements MessageRepository {
    async create(message: Message): Promise<void> {
        await database.none('insert into message (id_chat, message) values ($1, $2)', [message.id_chat, message.message]);
    } 

    async lastMessage(idChat: number): Promise<Message> {
        console.log(idChat)
        return await database.oneOrNone('select * from message where id_chat = $1 order by id desc limit 1', [idChat]);
    }
}