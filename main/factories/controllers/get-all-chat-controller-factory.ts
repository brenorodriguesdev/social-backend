import { GetChatService } from "../../../data/services/get-chat";
import { ChatRepositoryPostgres } from "../../../infra/chat-repository";
import { MessageRepositoryPostgres } from "../../../infra/message-repository";
import { GetChatController } from "../../../presentation/controllers/get-chat";
import { makeGetChatValidation } from "../validations/get-chat-validation-factory";

export const makeGetChatController = (): GetChatController => {
    const chatRepositoryPostgres = new ChatRepositoryPostgres()
    const messageRepositoryPostgres = new MessageRepositoryPostgres()
    const getChatService = new GetChatService(chatRepositoryPostgres, messageRepositoryPostgres)
    return new GetChatController(makeGetChatValidation(), getChatService)
}