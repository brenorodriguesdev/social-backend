import { RefuseInviteUseCase } from "../../domain/useCases/refuse-invite"
import { Validator } from "../../validation/contracts/validator"
import { Controller } from "../contracts/controller"
import { HttpRequest, HttpResponse } from "../contracts/http"
import { badRequest, created, serverError } from "../contracts/http-helper"
import { NotFoundError } from "../errors"

export class RefuseInviteController implements Controller {
    constructor(private readonly validator: Validator, private readonly refuseInviteUseCase: RefuseInviteUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { idConvite } = httpRequest.body
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const result = await this.refuseInviteUseCase.refuse(idConvite)
            if (result instanceof NotFoundError) {
                return badRequest(result)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}