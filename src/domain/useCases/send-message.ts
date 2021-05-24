import { SendMessageModel } from "../models/send-message";

export interface SendMessageUseCase {
    send(sendMessageModel: SendMessageModel): Promise<void | Error>
}