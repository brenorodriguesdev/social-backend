import { FriendListRepository } from "../data/contracts/friend-list-repository";
import { FriendList } from "../data/models/friend-list";
import { database } from "../main/config/database";

export class FriendListRepositoryPostgres implements FriendListRepository {
    async insert(friendList: FriendList): Promise<void> {
        await database.none('insert into friend_list (id_user, id_guest) values ($1, $2)', [friendList.id_user, friendList.id_guest]);
    } 
}