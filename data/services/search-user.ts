import { UserModel } from "../../domain/models/user";
import { SearchUserUseCase } from "../../domain/useCases/search-user";
import { UserRepository } from "../contracts";

export class SearchUserService implements SearchUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }
    async search(user: string): Promise<UserModel[]> {
        const users = await this.userRepository.filter(user)
        return users.map(user => {
            return {
                id: user.id,
                name: user.name
            }
        })
    }
}