import { FriendList } from "../models/friend-list";
import { User } from "../models/user";

export interface FriendListRepository {
    insert(friendList: FriendList): Promise<void>
    findByUser(idUser: number): Promise<User[]>
    findByUsers(idUser: number, idGuest: number): Promise<FriendList>
    areFriends(idUser: number, idGuest: number): Promise<FriendList>
}