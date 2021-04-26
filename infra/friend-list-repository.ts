import { FriendListRepository } from "../data/contracts/friend-list-repository";
import { FriendList } from "../data/models/friend-list";
import { database } from "../main/config/database";

export class FriendListRepositoryPostgres implements FriendListRepository {
    async insert(friendList: FriendList): Promise<void> {
        await database.none('insert into friend_list (id_user, id_guest) values ($1, $2)', [friendList.id_user, friendList.id_guest]);
    } 
    async findByUsers(idUser: number, idGuest: number): Promise<FriendList> {
        return await database.oneOrNone('select * from user_invite where id_user = $1 and id_guest = $2', [idUser, idGuest]);
    }
}