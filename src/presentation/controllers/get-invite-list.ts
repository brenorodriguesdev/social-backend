import { GetInviteListUseCase } from "../../domain/useCases/get-invite-list";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { ok, serverError } from "../contracts/http-helper";

export class GetInviteListController implements Controller {
    constructor(private readonly getInviteListUseCase: GetInviteListUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.body
            const invitesModel = await this.getInviteListUseCase.get(id)
            return ok(invitesModel)
        } catch (error) {
            return serverError()
        }
    }
}