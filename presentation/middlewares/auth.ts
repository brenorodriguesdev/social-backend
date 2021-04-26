import { AuthenticationUseCase } from "../../domain/useCases/authentication";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, ok, serverError } from "../contracts/http-helper";
import { Middleware } from "../contracts/middleware";
import { UnauthorizedError } from "../errors";

export class AuthMiddleware implements Middleware {
    constructor(private readonly authenticationUseCase: AuthenticationUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { accessToken } = httpRequest.body
            const data = await this.authenticationUseCase.auth(accessToken)
            if (data instanceof UnauthorizedError) {
                return badRequest(data)
            }
            return ok({ id: data.id })
        } catch (error) {
            return serverError()
        }
    }
}