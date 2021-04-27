import { MessageRepository } from "../data/contracts/message-repository";
import { Message } from "../data/models/message";
import { database } from "../main/config/database";

export class MessageRepositoryPostgres implements MessageRepository {
    async create(message: Message): Promise<void> {
        await database.none('insert into message (id_chat, message, id_sender, id_receiver) values ($1, $2)', [message.id_chat, message.message, message.id_sender, message.id_receiver]);
    } 

    async lastMessage(idChat: number): Promise<Message> {
        return await database.oneOrNone('select * from message where id_chat = $1 order by id desc limit 1', [idChat]);
    }

    async findAllMessage(idChat: number): Promise<Message[]> {
        return await database.manyOrNone('select * from message where id_chat = $1 order by id desc', [idChat]);
    }
}