import { AcceptInviteUseCase } from "../../domain/useCases/accept-invite";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, created, serverError } from "../contracts/http-helper";
import { AlreadyExistError, NotFoundError } from "../errors";

export class AcceptInviteController implements Controller {
    constructor(private readonly validator: Validator, private readonly acceptInviteUseCase: AcceptInviteUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id_convite } = httpRequest.body
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const result = await this.acceptInviteUseCase.accept(id_convite)
            if (result instanceof NotFoundError || result instanceof AlreadyExistError) {
                return badRequest(result)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}