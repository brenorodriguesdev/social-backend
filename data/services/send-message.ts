import { SendMessageModel } from "../../domain/models/send-message";
import { SendMessageUseCase } from "../../domain/useCases/send-message";

export class SendMessageService implements SendMessageUseCase {
    async send(sendMessageModel: SendMessageModel): Promise<void | Error> {
        
    }
}