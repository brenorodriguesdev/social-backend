import { AuthenticationUseCase } from "../../domain/useCases/authentication";
import { Encrypter } from "../contracts/encrypter";

export class AuthenticationService implements AuthenticationUseCase {
    constructor(private readonly encrypter: Encrypter) { }

    async auth(accessToken: string): Promise<any> {
        const data = this.encrypter.encrypt(accessToken)
        if (!data) {
            throw new Error('Esse token de acesso não é válido!')
        }
        return data
    }
}