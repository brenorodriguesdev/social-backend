import { CreateUserModel } from "../../domain/models/create-user";
import { CreateUserUseCase } from "../../domain/useCases/create-user";
import { Hasher } from "../contracts/hasher";
import { UserRepository } from "../contracts/userRepository";

export class CreateUserService implements CreateUserUseCase {

    constructor(private readonly hasher: Hasher, private readonly userRepository: UserRepository) { }
    async create(user: CreateUserModel): Promise<void> {
        const alreadyUser = await this.userRepository.findByEmail(user.email)
        if (alreadyUser) {
            throw new Error('Esse email já está cadastrado em nosso banco de dados!')
        }
        const password = await this.hasher.hash(user.password)
        await this.userRepository.create({
            name: user.name,
            email: user.email,
            password
        })
    }
}