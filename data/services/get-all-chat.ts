import { ChatModel } from "../../domain/models/chat";
import { GetAllChatUseCase } from "../../domain/useCases/get-all-chat";
import { ChatRepository } from "../contracts/chat-repository";
import { MessageRepository } from "../contracts/message-repository";

export class GetAllChatService implements GetAllChatUseCase {
    constructor(private readonly chatRepository: ChatRepository, private readonly messageRepository: MessageRepository) { }
    async get(idUser: number): Promise<ChatModel[] | Error> {
        const chatList = await this.chatRepository.findAllChat(idUser)
        let chatModelList : ChatModel[] = []
        chatList.map(async chat => {
            const message = await this.messageRepository.lastMessage(chat.id)
            chatModelList.push({
                id: chat.id,
                userName: chat.id_sender === idUser ? chat.nameReceiver : chat.nameSender,
                lastMessage: message.message
            })
        })
        return chatModelList
    }
}