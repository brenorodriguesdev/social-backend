import { FriendList } from "../models/friend-list";

export interface FriendListRepository {
    insert(friendList: FriendList): Promise<void>
    findByUsers(idUser: number, idGuest: number): Promise<FriendList>
}