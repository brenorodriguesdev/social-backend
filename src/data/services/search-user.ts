import { UserModel } from "../../domain/models/user";
import { SearchUserUseCase } from "../../domain/useCases/search-user";
import { UserRepository } from "../contracts";
import { FriendListRepository } from "../contracts/friend-list-repository";

export class SearchUserService implements SearchUserUseCase {
    constructor(private readonly userRepository: UserRepository, private readonly friendListRepository: FriendListRepository) { }
    async search(id: number, user: string): Promise<UserModel[]> {
        const users = await this.userRepository.filter(id, user)
        return await Promise.all(users.map(async (user): Promise<UserModel> => {
            const friendList = await this.friendListRepository.areFriends(id, user.id)
            return {
                id: user.id,
                name: user.name,
                isFriend: friendList ? true : false
            }
        }))
    }
}