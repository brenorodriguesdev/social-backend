import { GetChatUseCase } from "../../domain/useCases/get-chat";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, ok, serverError } from "../contracts/http-helper";
import { RequiredFieldError, UnauthorizedError } from "../errors";

export class GetChatController implements Controller {

    constructor(private readonly validator: Validator, private readonly getChatUseCase: GetChatUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }

            const { id } = httpRequest.body
            const { idChat } = httpRequest.params

            if (!id) {
                return badRequest(new RequiredFieldError('idUser'))
            }

            const chat = await this.getChatUseCase.get(id, idChat)
            if (chat instanceof UnauthorizedError) {
                return badRequest(chat)
            }

            return ok(chat)
        } catch (error) {
            return serverError()
        }
    }
}