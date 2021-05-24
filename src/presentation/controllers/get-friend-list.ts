import { GetFriendListUseCase } from "../../domain/useCases/get-friend-list";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, ok, serverError } from "../contracts/http-helper";

export class GetFriendListController implements Controller {
    constructor(private readonly validator: Validator, private readonly getFriendListUseCase: GetFriendListUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.query)
            if (error) {
                return badRequest(error)
            }
            const { id } = httpRequest.body
            const { idUser } = httpRequest.query
            const users = await this.getFriendListUseCase.get(idUser > 0 ? idUser : id)
            return ok(users)
        } catch (error) {
            return serverError()
        }
    }
}