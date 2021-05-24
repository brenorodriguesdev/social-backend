import { ChatModel } from "../models/chat";

export interface GetAllChatUseCase {
    get(idUser: number): Promise<ChatModel[] | Error>
}