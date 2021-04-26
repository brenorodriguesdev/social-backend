import { SignInModel } from "../../domain/models/sign-in";
import { SignInUseCase } from "../../domain/useCases/sign-in";
import { UserRepository } from "../contracts/userRepository";
import { Hasher } from "../contracts/hasher";
import { Crypter } from "../contracts/crypter";

export class SignInService implements SignInUseCase {
    constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher, private readonly crypter: Crypter) { }
    async sign(signInModel: SignInModel): Promise<string> {
        const alreadyUser = await this.userRepository.findByEmail(signInModel.email)
        if (!alreadyUser) {
            throw new Error('Esse email não está cadastrado em nosso banco de dados!')
        }
        const isValid = this.hasher.compare(signInModel.password, alreadyUser.password)
        if (!isValid) {
            throw new Error('Credenciais Inválidas!')
        }
        return this.crypter.crypt(alreadyUser)
    }
}