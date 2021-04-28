import { UserModel } from "../models/user";

export interface SearchUserUseCase {
    search(user: string) : Promise<UserModel[] | Error>
}