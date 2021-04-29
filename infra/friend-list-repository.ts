import { FriendListRepository } from "../data/contracts/friend-list-repository";
import { FriendList } from "../data/models/friend-list";
import { User } from "../data/models/user";
import { database } from "../main/config/database";

export class FriendListRepositoryPostgres implements FriendListRepository {
    async insert(friendList: FriendList): Promise<void> {
        await database.none('insert into friend_list (id_user, id_guest) values ($1, $2)', [friendList.id_user, friendList.id_guest]);
    } 
    async findByUsers(idUser: number, idGuest: number): Promise<FriendList> {
        return await database.oneOrNone('select * from friend_list where id_user = $1 and id_guest = $2', [idUser, idGuest]);
    }
    async findByUser(idUser: number): Promise<User[]> {
        return await database.manyOrNone('select u.id, u.name from friend_list f, user_account u where (f.id_user = $1 or f.id_guest = $1) and ((f.id_user = $1 && f.id_user = u.id) or (f.id_guest = $1 && f.id_guest = u.id))', [idUser]);
    }
    async areFriends(idUser: number, idGuest: number): Promise<FriendList> {
        return await database.oneOrNone('select * from friend_list where (id_user = $1 and id_guest = $2 or id_guest = $1 and id_user = $2) ', [idUser, idGuest, idGuest, idUser]);
    }
}