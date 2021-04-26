import { SignInModel } from "../../domain/models/sign-in";
import { SignInUseCase } from "../../domain/useCases/sign-in";
import { UserRepository } from "../contracts/userRepository";
import { Hasher } from "../contracts/hasher";
import { Crypter } from "../contracts/crypter";
import { UnauthorizedError } from "../../presentation/errors/unauthorized-error";

export class SignInService implements SignInUseCase {
    constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher, private readonly crypter: Crypter) { }
    async sign(signInModel: SignInModel): Promise<string | Error> {
        const alreadyUser = await this.userRepository.findByEmail(signInModel.email)
        if (!alreadyUser) {
            return new UnauthorizedError('Esse email não está cadastrado em nosso banco de dados!')
        }
        const isValid = this.hasher.compare(signInModel.password, alreadyUser.password)
        if (!isValid) {
            return new UnauthorizedError('Credenciais Inválidas!')
        }
        return this.crypter.crypt(alreadyUser)
    }
}