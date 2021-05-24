import { UserModel } from "../../domain/models/user";
import { GetFriendListUseCase } from "../../domain/useCases/get-friend-list";
import { FriendListRepository } from "../contracts/friend-list-repository";

export class GetFriendListService implements GetFriendListUseCase {
    constructor(private readonly friendListRepository: FriendListRepository) { }
    async get(idUser: number): Promise<UserModel[]> {
        const users = await this.friendListRepository.findByUser(idUser)
        return users.map(user => {
            return {
                id: user.id,
                name: user.name
            }
        })
    }
}