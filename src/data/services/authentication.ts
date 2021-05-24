import { AuthenticationUseCase } from "../../domain/useCases/authentication";
import { UnauthorizedError } from "../../presentation/errors/unauthorized-error";
import { Encrypter } from "../contracts/encrypter";

export class AuthenticationService implements AuthenticationUseCase {
    constructor(private readonly encrypter: Encrypter) { }

    async auth(accessToken: string): Promise<any> {
        const data = await this.encrypter.encrypt(accessToken)
        if (!data) {
            return new UnauthorizedError('Esse token de acesso não é válido!')
        }
        return data
    }
}