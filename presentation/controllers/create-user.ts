import { CreateUserUseCase } from "../../domain/useCases/create-user";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, created, serverError } from "../contracts/http-helper";
import { AlreadyExistError } from "../errors";

export class CreateUserController implements Controller {
    constructor(private readonly validator: Validator, private readonly createUserUseCase: CreateUserUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { name, email, password } = httpRequest.body
            const result = await this.createUserUseCase.create({
                name,
                email,
                password
            })
            if (result instanceof AlreadyExistError) {
                return badRequest(result)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}