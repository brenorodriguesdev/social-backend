import { ViewNotificationUseCase } from "../../domain/useCases/view-notification";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { created, serverError } from "../contracts/http-helper";

export class ViewNotificationController implements Controller {
    constructor(private readonly viewNotificationUseCase: ViewNotificationUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.body
            await this.viewNotificationUseCase.view(id)
            return created()
        } catch (error) {
            return serverError()
        }
    }
}