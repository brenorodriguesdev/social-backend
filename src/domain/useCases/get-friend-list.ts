import { UserModel } from "../models/user";

export interface GetFriendListUseCase {
    get(idUser: number) :Promise<UserModel[]> 
}