import { GetAllChatUseCase } from "../../domain/useCases/get-all-chat";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { ok, serverError } from "../contracts/http-helper";

export class GetAllChatController implements Controller {
    constructor(private readonly getAllChatUseCase: GetAllChatUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.body
            const chatListModel = await this.getAllChatUseCase.get(id)
            return ok(chatListModel)
        } catch (error) {
            return serverError()
        }
    }
}