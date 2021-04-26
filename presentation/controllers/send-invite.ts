import { SendInviteUseCase } from "../../domain/useCases/send-invite";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, created, serverError } from "../contracts/http-helper";

export class SendInviteController implements Controller {

    constructor(private readonly validator: Validator, private readonly sendInviteUseCase: SendInviteUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { id, idGuest } = httpRequest.body
            this.sendInviteUseCase.send({
                id,
                idGuest,
            })
            return created()
        } catch (error) {
            return serverError()
        }
    }
}