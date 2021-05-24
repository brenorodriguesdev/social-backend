import { SendMessageService } from "../../../data/services/send-message";
import { ChatRepositoryPostgres } from "../../../infra/chat-repository";
import { FriendListRepositoryPostgres } from "../../../infra/friend-list-repository";
import { MessageRepositoryPostgres } from "../../../infra/message-repository";
import { SendMessageController } from "../../../presentation/controllers/send-message";
import { makeSendMessageValidation } from "../validations/send-message-validation-factory";



export const makeSendMessageController = (): SendMessageController => {
    const friendListRepositoryPostgres = new FriendListRepositoryPostgres()
    const chatRepositoryPostgres = new ChatRepositoryPostgres()
    const messageRepositoryPostgres = new MessageRepositoryPostgres()
    const sendMessageService = new SendMessageService(friendListRepositoryPostgres, chatRepositoryPostgres, messageRepositoryPostgres)
    return new SendMessageController(makeSendMessageValidation(), sendMessageService)
}