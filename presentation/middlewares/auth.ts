import { AuthenticationUseCase } from "../../domain/useCases/authentication";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { ok, serverError } from "../contracts/http-helper";
import { Middleware } from "../contracts/middleware";

export class AuthMiddleware implements Middleware {
    constructor(private readonly authenticationUseCase: AuthenticationUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { accessToken } = httpRequest.body
            const data = await this.authenticationUseCase.auth(accessToken)
            return ok({ id: data.id })
        } catch (error) {
            return serverError()
        }
    }
}