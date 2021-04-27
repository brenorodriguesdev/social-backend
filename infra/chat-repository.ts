import { ChatRepository } from "../data/contracts/chat-repository";
import { Chat } from "../data/models/chat";
import { database } from "../main/config/database";

export class ChatRepositoryPostgres implements ChatRepository {
    async create(chat: Chat): Promise<Chat> {
        return await database.one('insert into chat (id_sender, id_receiver) values ($1, $2) returning *', [chat.id_sender, chat.id_receiver]);
    }
    async findByUsers(idSender: number, idReceiver: number): Promise<Chat> {
        return await database.oneOrNone('select * from chat where id_sender = $1 and id_receiver = $2', [idSender, idReceiver]);
    }
}