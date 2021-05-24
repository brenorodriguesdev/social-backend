import { SearchUserUseCase } from "../../domain/useCases/search-user";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, ok, serverError } from "../contracts/http-helper";

export class SearchUserController implements Controller {
    constructor(private readonly validator: Validator, private readonly searchUserUseCase: SearchUserUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.query)
            if (error) {
                return badRequest(error)
            }
            const { id } = httpRequest.body
            const { user } = httpRequest.query
            const users = await this.searchUserUseCase.search(id, user)
            return ok(users)
        } catch (error) {
            return serverError()
        }
    }
}