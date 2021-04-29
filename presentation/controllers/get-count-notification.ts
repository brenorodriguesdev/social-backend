import { GetCountNotificationUseCase } from "../../domain/useCases/get-count-notification";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { ok, serverError } from "../contracts/http-helper";

export class GetCountNotificationController implements Controller {
    constructor(private readonly getCountNotificationUseCase: GetCountNotificationUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.body
            const count = await this.getCountNotificationUseCase.get(id)
            return ok(count)
        } catch (error) {
            return serverError()
        }
    }
}