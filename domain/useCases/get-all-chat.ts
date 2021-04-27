import { ChatModel } from "../models/chat";

export interface GetAllChat {
    get(idUser: number): Promise<ChatModel[]>
}