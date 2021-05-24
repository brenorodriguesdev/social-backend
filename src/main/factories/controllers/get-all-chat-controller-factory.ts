import { GetAllChatService } from "../../../data/services/get-all-chat";
import { ChatRepositoryPostgres } from "../../../infra/chat-repository";
import { MessageRepositoryPostgres } from "../../../infra/message-repository";
import { GetAllChatController } from "../../../presentation/controllers/get-all-chat";

export const makeGetAllChatController = (): GetAllChatController => {
    const chatRepositoryPostgres = new ChatRepositoryPostgres()
    const messageRepositoryPostgres = new MessageRepositoryPostgres()
    const getAllChatService = new GetAllChatService(chatRepositoryPostgres, messageRepositoryPostgres)
    return new GetAllChatController(getAllChatService)
}