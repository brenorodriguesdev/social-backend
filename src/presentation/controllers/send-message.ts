import { SendMessageUseCase } from "../../domain/useCases/send-message";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, created, serverError } from "../contracts/http-helper";
import { UnauthorizedError } from "../errors";

export class SendMessageController implements Controller {
    constructor(private readonly validator: Validator, private readonly sendMessageUseCase: SendMessageUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { id, idReceiver, message } = httpRequest.body
            const result = await this.sendMessageUseCase.send({
                idSender: id,
                idReceiver,
                message
            })
            if (result instanceof UnauthorizedError) {
                return badRequest(result)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}